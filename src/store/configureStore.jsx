import { createStore, combineReducers } from '@reduxjs/toolkit'
import { employeeReducer } from '../reducers/employee'
import { filterReducer } from '../reducers/filter'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
        const store = createStore(combineReducers({
        employee: employeeReducer,
        filter: filterReducer
    }))
    return store
}