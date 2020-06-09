import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className='container'>
      <Router>
        <Switch>
          <Route exact path='/' Component={Home} />
          <Route exact path='/post/:postId' Component={Post} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
