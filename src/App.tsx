import * as React from 'react'
import { render } from 'react-dom'
import { Route, BrowserRouter } from 'react-router-dom'
import routes from './router/routes'
export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {routes.map((route, indedx) => <Route path={route.path} component={route.components} key={indedx}></Route>)}
        </div>
      </BrowserRouter>
    )
  }
}
