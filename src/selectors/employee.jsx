//we will combine the employee reducer with filter reducer to get the output data

export const GetEmployees = (employee,filter) => {
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
      else if (filter.sortBy === 'firstName') {
          return a.firstName<b.firstName?-1:1
      }
      else if (filter.sortBy === 'lastName') {
        return a.lastName<b.lastName?-1:1
      }
      })
  }