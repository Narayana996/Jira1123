import React from 'react'
import { useState,useEffect } from 'react'



const EmployeeForm = (props) => {
    const [firstName, setFirstName] = useState(props.employeeData ? props.employeeData.firstName:'')
    const [lastName, setLastName] = useState(props.employeeData ? props.employeeData.lastName:'')
    const [country, setCountry] = useState(props.employeeData ? props.employeeData.country:'')
    const [dob,setDob]=useState(props.employeeData ? props.employeeData.dateOfBirth:'')
    const [countryData, setCountryData] = useState([])
    const [error, setError] = useState('')
    
    const handleFieldChange = (e) => {
        const {name,value} = e.target
        if (name === 'firstName') {
            setFirstName(value)
        }
        else if (name === 'lastName') {
            setLastName(value)
        }
        else if (name === 'country') {
            setCountry(value)
        }
        else if (name === 'dob') {
            setDob(value)
        }
    }

    const handleAddEmployee = (e) => {
        e.preventDefault()
        if (!firstName || !lastName || !country) {
            setError(`Please provide the Input details`)
        }
        else {
            setError('')
            props.onSubmit({
                firstName,
                lastName,
                country,
                dateOfBirth:dob
            })
        }
    }

    const getCountries = () => {
        fetch('/assets/ConutryData.json', {
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        }).then(res => res.json()).then(data => {
            setCountryData(data)
        })
    }

    useEffect(() => {
      getCountries()
    }, [])
    
    return (
        <div>
            { error && <p>{error}</p>}
          <form onSubmit={handleAddEmployee}>
            <input type='text' name='firstName' placeholder='first name' value={firstName} onChange={handleFieldChange}/>
            <input type='text' name='lastName' placeholder='last name' value={lastName} onChange={handleFieldChange} />
            <select name='country' onChange={handleFieldChange} value={country && country}>
                <option>!--Chose Country--!</option>
                {countryData && countryData.map(country => {
                    return <option key={country.code} value={country.name}>{country.name}</option>
                })}
            </select>
            <input type='date' name='dob' value={dob} onChange={handleFieldChange}/>
            <button>Add Employee</button>
          </form>
        </div>
    )
}

export default EmployeeForm