import React from 'react'
//import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import { GetEmployees } from '../selectors/employee'
import Employee from './Employee'

const EmployeeList = (props) => {
    let employee = useSelector(state => ({
        employeeList: GetEmployees(state.employee,state.filter)
    }))
    return (
        <div>
            {/* Employee List:{employee.employeeList.length} */}
            <table className="table table-stripped">
                <thead>
                <tr>
                    <th>Sr.NO</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>EMail Id</th>
                    <th>Country</th>
                    <th>Action</th>
                </tr>
                </thead>
                </table> 
            {employee.employeeList.map(emp => {
              return  <Employee key={emp.id} {...emp}/>
            })}
        </div>
    )  
}


//Below is the one way of return
// const ExportedEmployeeList = connect((state) => {
//     return {
//         employeeList:state.employee
//     }
// })(EmployeeList)

//Below one is most common pattren of use
//const mapStateToProps=(state) => {
    //     return {
    //         employeeList:state.employee
    //     }
    // }
 //export default connect(mapStateToProps)(EmployeeList)   

export default EmployeeList