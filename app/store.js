import { createStore } from 'redux'
import tttApp from './reducers'

const store = createStore(tttApp)
// console.log('store: ', store.getState())

export default store
