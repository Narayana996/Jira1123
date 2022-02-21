//Default state object for filters
const filterDefaultState = {
    text: '',
    sortBy: '',
}


export const filterReducer = (state=filterDefaultState,action) => {
    switch (action.type) {
      case 'FILTER_BY_NAME':
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
