import React from 'react'
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// Redux Data Flow:
// Component {properties} -> Dispatcher -> Reducer -> Store {state}
// -> State to Properties Mapper -> Component {properties}

// type is required to uniquely identify an action
const SomeComponent = ({someComponentProperty, dispatch}) => (
  <button onClick={e => {
      dispatch({type: 'some action'})
    }}>Some Button {someComponentProperty}
  </button>
)

function someStateToPropsMapper(state) {
  return {
    someComponentProperty: state.someStateAttribute
  }
}
// connect component in containter
// State to Properties Mapper passed as connect paramater
const SomeContainer = connect(someStateToPropsMapper)(SomeComponent)

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
  export default SomeApp2 = () => (
    <Provider store={someStore}>
      <SomeContainer />
    </Provider>
  )
