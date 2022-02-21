//Actions for Filter Reducer
export const filterByName = ( text ='') => ({
    type: 'FILTER_BY_NAME',
    text
})
  
export const sortByFirstName = () => ({
    type: 'SORT_BY_FIRSTNAME',
  })
  
export const sortByLastName = () => ({
    type: 'SORT_BY_LASTNAME',
  })
  
export const sortByCreatedDate = () => ({
    type: 'SORT_BY_CREATEDDATE',
  })
  
export const sortByModifiedDate = () => ({
    type: 'SORT_BY_MODIFIEDDATE',
  })