import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import tttApp from './reducers'
import App from './components/App'

const store = createStore(
  tttApp
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
