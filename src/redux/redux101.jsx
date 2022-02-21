import { createStore } from '@reduxjs/toolkit'

const increment = ({incrementBy=1}={}) => ({
  type: 'INCREMENT',
  incrementBy
})

const set = ({ setBy=100 }) => ({
  type: 'SET',
  setBy
})

const reset = () => ({
    type: 'RESET'
  })

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
      case 'INCREMENT':
          return {
              count: action.incrementBy
          }
    case 'DECREMENT':
      return {
        count: state.count -5
      }
    case 'RESET':
      return {
        count:0
      }
      case 'SET':
        return {
          count:action.setBy
        }
    
      default:
          return state
  }
})

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(increment())
store.dispatch(reset())
store.dispatch(set({setBy:100}))

// store.dispatch({
//   type:'INCREMENT'
// })

// store.dispatch({
//   type:'INCREAMENT'
// })

// store.dispatch({
//   type:'INCREAMENT'
// })

store.dispatch({
  type:'RESET'
})

store.dispatch({
  type:'DECREMENT'
})
