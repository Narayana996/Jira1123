
//Default state for employee-->empty array
const employeeDefaultState = []


export const employeeReducer = (state = employeeDefaultState, action) => {
    switch (action.type) {
      case 'ADD_EMPLOYEE':
        return [ ...state, action.employee ]
            
        case 'EDIT_EMPLOYEE':
            return state.map(emp => {
                      if (emp.id === action.id) {
                        return { ...emp, ...action.employeeData, modifiedAt:action.modifiedAt } 
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