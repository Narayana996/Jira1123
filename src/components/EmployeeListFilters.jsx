import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { filterByName,sortByFirstName,sortByLastName,sortByCreatedDate,sortByModifiedDate } from '../actions/filter'


const EmployeeListFilter = () => {
            const filter = useSelector(state => {
                    return state.filter
            })
            const dispatch=useDispatch()
    return(
            <div className='filterContainer'>
                <input type='text' placeholder='Search By Name' value={filter.text} onChange={(e) => { dispatch(filterByName(e.target.value)) }} />
            <label>Sort By: </label>
            <select value={filter.sortBy}
                onChange={(e) => {
                    if (e.target.value === 'firstName') {
                        dispatch(sortByFirstName())
                    }
                   else if (e.target.value === 'lastName') {
                        dispatch(sortByLastName())
                    }
                    else if (e.target.value === 'createdDate') {
                        dispatch(sortByCreatedDate())
                    }
                    else if (e.target.value === 'modifiedDate') {
                        dispatch(sortByModifiedDate())
                        }
                    }}>
                    <option value='firstName'>First Name</option>
                    <option value='lastName' >Last Name</option>
                    <option value='createdDate' >Created Date</option>
                    <option value='modifiedDate' >Modified Date</option>
                </select>
             </div>
    )
}

export default EmployeeListFilter