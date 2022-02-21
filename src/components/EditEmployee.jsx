import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import EmployeeForm from './EmployeeForm'
import { editEmployee } from '../actions/employee'
import {useNavigate} from 'react-router-dom'



const EditEmployee = (props) => {
        //getting Current employee Id using Get Employee method
        const empId = GetEmployeeId()
        const dispatch = useDispatch()
        const navigate = useNavigate()
        //Getting currety employee details from global state by using current employee Id
        const currentEmployee = useSelector((state) => state.employee.find(emp => emp.id === empId))

        //This method will dispatch the edit action to reducer and then redirect to home page using Navigator
        const onSubmit = (empId,employee) => {
          dispatch(editEmployee(empId,employee))
          navigate('/')
  }
 // var test='test'
  
  return(
      <div>
      <EmployeeForm employeeData={currentEmployee}
                    onSubmit={(employee)=>{onSubmit(empId,employee)}}/>
      </div>
  )}

//This is new way of getting params id in React Router version6
const GetEmployeeId=()=>{
    let params = useParams();
    return params.id
}

export default EditEmployee