import React, { Component } from 'react'
import db from '../firebase'
import { Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    )
  }
}

export default Home
