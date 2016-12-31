import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import tttApp from './reducers'
import store from './store'
import AppContainer from './containers/AppContainer/'

// store.subscribe(render)
// const store = createStore(tttApp)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    document.getElementById('app')
  )
}

store.subscribe(render)
//  humanPlayer={store.getState().humanPlayer}
// console.log('store.getState(): ', store.getState())
render()
