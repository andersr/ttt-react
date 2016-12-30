import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import tttApp from './reducers'
import AppContainer from './containers/AppContainer.jsx'

const store = createStore(
  tttApp
)

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
)
