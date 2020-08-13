import React from 'react'
import GlobalStyles from './GlobalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './pages/About.js'
import Home from './pages/Home.js'

export default function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyles />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
