import React from 'react'
import { useDispatch } from 'react-redux'
import { removeEmployee } from '../actions/employee'
import {Link} from 'react-router-dom'

const Employee = ({ id,firstName, lastName, corporateId, country }) => {
  const dispatch=useDispatch()
  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <td>1</td>
            <td><Link to={`/edit/${id}`}>{firstName}</Link></td>
            <td>{lastName}</td>
            <td>{corporateId}</td>
            <td>{country}</td>
            <td><button onClick={()=>dispatch(removeEmployee({id}))}>X</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Employee