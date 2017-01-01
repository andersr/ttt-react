import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import AppContainer from './containers/AppContainer/'

// store.subscribe(function() {
//   console.log('store.getState(): ', store.getState())
// })

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
)
