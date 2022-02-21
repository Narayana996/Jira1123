import { createStore, combineReducers } from '@reduxjs/toolkit'
import { v4 as uuid  } from 'uuid'

//Default state for employee-->empty array
const employeeDefaultState = []

//Default state object for filters
const filterDefaultState = {
    text: '',
    sortBy: '',
}

//Actions for employee reducer
const addEmployee = ({firstName='',lastName='',dateOfBirth='',country='',createdAt=undefined,modifiedAt=undefined}={}) => ({
    type: 'ADD_EMPLOYEE',
    employee: {
        id:uuid(),
        firstName,
        lastName,
        dateOfBirth,
        country,
        corporateId: `${firstName}.${lastName}@domainId.com`,
        createdAt,
        modifiedAt
    }
})

const editEmployee = (employeeData) => ({
  type: 'EDIT_EMPLOYEE',
  employeeData
})

const removeEmployee = ({id}={}) => ({
  type: 'REMOVE_EMPLOYEE',
  id  
})


//Actions for Filter Reducer
const textFilter = ( text ='') => ({
  type: 'TEXT_FILTER',
  text
})

const sortByFirstName = () => ({
  type: 'SORT_BY_FIRSTNAME',
})

const sortByLastName = () => ({
  type: 'SORT_BY_LASTNAME',
})

const sortByCreatedDate = () => ({
  type: 'SORT_BY_CREATEDDATE',
})

const sortByModifiedDate = () => ({
  type: 'SORT_BY_MODIFIEDDATE',
})


const employeeReducer = (state = employeeDefaultState, action) => {
    switch (action.type) {
      case 'ADD_EMPLOYEE':
        return [ ...state, action.employee ]
            
        case 'EDIT_EMPLOYEE':
            return state.map(emp => {
                      if (emp.id === action.employeeData.id) {
                        return { ...emp, ...action.employeeData } 
                      }
                    else {
                      return emp
                    }
                  })            
        case 'REMOVE_EMPLOYEE':
            return state.filter(emp=>emp.id!==action.id)
            
        default:
            return state;
    }
}

const filterReducer = (state=filterDefaultState,action) => {
    switch (action.type) {
      case 'TEXT_FILTER':
        return { ...state, text: action.text }
      case 'SORT_BY_FIRSTNAME':
        return {...state,sortBy:'firstName'}
      case 'SORT_BY_LASTNAME':
        return { ...state, sortBy:'lastName' }
      case 'SORT_BY_CREATEDDATE':
        return { ...state, sortBy:'createdDate' }
      case 'SORT_BY_MODIFIEDDATE':
        return {...state,sortBy:'modifiedDate'}
      default:
        return state;
    }
}

//we will combine the employee reducer with filter reducer to get the output data

const getEmployees = (employee,filter) => {
  return employee.filter(emp => {
    const nameMatch = emp.firstName.toLowerCase().includes(filter.text.toLowerCase()) ||
                       emp.lastName.toLowerCase().includes(filter.text.toLowerCase())
      return nameMatch
  // eslint-disable-next-line array-callback-return
  }).sort((a,b) => {
    if (filter.sortBy==='createdDate') {
        return a.createdAt<b.createdAt?1:-1
    }
    else if (filter.sortBy === 'modifiedDate') {
      return a.modifiedAt<b.modifiedAt?1:-1
    }
    })
}

const store = createStore(combineReducers({
    employee: employeeReducer,
    filter:filterReducer
}))

store.subscribe(() => {
  const state = store.getState()
  const visibleEmployees=getEmployees(state.employee,state.filter)
  console.log(visibleEmployees)
})


store.dispatch(addEmployee({firstName: 'NarayanaSwaMy', lastName: 'Dammala', dateOfBirth: 325, country: 'India',createdAt:1000,modifiedAt:200 }))

store.dispatch(addEmployee({firstName: 'Sadhika', lastName: 'Dammala', dateOfBirth: 325, country: 'Aus',createdAt:100,modifiedAt:2000 }))

// store.dispatch(addEmployee({ id: 3, firstName: 'Venkat', lastName: 'Dammala', dateOfBirth: 325, country: 'Pak' }))

// store.dispatch(editEmployee({ id: 3, firstName: 'Srinu' }))

//store.dispatch(textFilter('M'))

// store.dispatch(textFilter())

// store.dispatch(sortByFirstName())

// store.dispatch(sortByLastName())

store.dispatch(sortByCreatedDate())

store.dispatch(sortByModifiedDate())




