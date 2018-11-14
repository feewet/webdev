import React from 'react'
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import SomeApp1 from './SomeApp1'
import SomeApp2 from './SomeApp1'

  ReactDOM.render(
    <div>
      <SomeApp1 />
      <SomeApp2 />
    </div>,
    document.getElementById('root')
  )
