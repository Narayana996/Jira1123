import React from 'react';
import EmployeeForm from './EmployeeForm'
import { addEmployee } from '../actions/employee'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CreateEmployee = (props) => {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const onSubmit = ({ firstName, lastName, country, dateOfBirth }) => {
        dispatch(addEmployee({ firstName, lastName, country, dateOfBirth }))
        navigate('/')
    }
    return (
        <div>
            <EmployeeForm onSubmit={(employee)=>onSubmit(employee)} />
        </div>
    )
}

export default CreateEmployee