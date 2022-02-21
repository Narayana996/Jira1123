import {v4 as uuid} from 'uuid'

//Actions for employee reducer
export const addEmployee = ({firstName='',lastName='',dateOfBirth='',country='',createdAt=undefined,modifiedAt=undefined}={}) => ({
    type: 'ADD_EMPLOYEE',
    employee: {
        id:uuid(),
        firstName,
        lastName,
        dateOfBirth,
        country,
        corporateId: `${firstName}.${lastName}@domainId.com`,
        createdAt:new Date().toLocaleString()+"",
        modifiedAt:new Date().toLocaleString()+"",
    }
})

export const editEmployee = (id,employeeData) => ({
  type: 'EDIT_EMPLOYEE',
  modifiedAt: new Date().toLocaleString() + "",
  id,
  employeeData
})

export const removeEmployee = ({id}={}) => ({
  type: 'REMOVE_EMPLOYEE',
  id  
})