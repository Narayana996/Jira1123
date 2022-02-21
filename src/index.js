import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { addEmployee, editEmployee } from './actions/employee'
import './styles/_styles.scss'
import 'normalize.css/normalize.css'
import reportWebVitals from './reportWebVitals';


const store = configureStore()
console.log(store.getState())
const getId=store.dispatch(addEmployee({ firstName: 'Narayana Swamy', lastName: 'Dammala', dateOfBirth: "1993-08-25", country: 'India'}))

store.dispatch(addEmployee({ firstName: 'Sadhika', lastName: 'Bammala', dateOfBirth: 325, country: 'Aus', createdAt: 100, modifiedAt: 2000 }))




//store.dispatch(editEmployee({ id:getId.employee.id,firstName: 'Narayana', lastName: 'Dammala', dateOfBirth: 325, country: 'India'}))


//store.dispatch(sortByFirstName());
//store.dispatch(sortByLastName());
//store.dispatch(filterByName('swamy'));

// setTimeout(() => {
//   store.dispatch(textFilter('k'));
// },4000)

console.log(store.getState())

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)


ReactDOM.render(
  <React.StrictMode>
      {jsx}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
