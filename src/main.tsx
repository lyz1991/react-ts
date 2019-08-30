import * as React from 'react'
import { render } from 'react-dom'
import { Route, BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux"
import App from './App'
import store from './store/store'
import '@babel/polyfill'
render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('app'))
