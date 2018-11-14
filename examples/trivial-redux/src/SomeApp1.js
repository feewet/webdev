import React from 'react'
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// Redux Data Flow:
// Component (View) -> Dispatcher -> Reducer -> Store

// type is required to uniquely identify an action
const SomeComponent = ({dispatch}) => (
  <button onClick={e => {
      dispatch({type: 'some action'})
    }}>Some Button</button>
  )
  // connect component in containter
  const SomeContainer = connect()(SomeComponent)

  // reducer handles dispatched actions with cases
  const someReducer = (state =
    {someDefaultProperty: 'some state'}, action) => {
      switch (action.type) {
        case 'some action':
        alert('some action dispatched')
        return {someStateAttribute: 'some new state'}
        default: return state
      }
    }

    // store is the sole source of application state
    const someStore = createStore(someReducer)

    // providers provide store to application
    // reducers create state
    const SomeApp1 = () => (
      <Provider store={someStore}>
        <SomeContainer />
      </Provider>
    )

    export default SomeApp1
