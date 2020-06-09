import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import db from '../firebase'
import ReactMarkdown from 'react-markdown'

class Post extends Component {
  constructor(props) {
    super(props)

    this.titleRef = React.createRef()
    this.bodyRef = React.createRef()
    this.postFBRef = db.ref(`posts/${this.props.match.params.postId}`)
  }

  render() {
    return (
      <div>
        <h1>Post Page</h1>
      </div>
    )
  }
}

export default Post
