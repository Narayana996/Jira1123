import React from 'react';
import EmployeeList from './EmployeeList'
import EmployeeListFilter from './EmployeeListFilters'

const EmployeeDashboard = () =>(
    <div className='container'>
        <EmployeeListFilter />
        <EmployeeList />    
    </div >
    )

export default EmployeeDashboard

