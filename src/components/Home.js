import React, { Component } from 'react'
import db from '../firebase'
import { Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

class Home extends Component {
  state = {
    posts: [],
    title: '',
  }

  componentDidMount() {
    db.ref('/posts').on('value', (snapshot) => {
      let posts = []
      snapshot.forEach((childSnapshot) => {
        posts.push({
          ...childSnapshot.val(),
          key: childSnapshot.key,
        })
      })
      this.setState({ posts })
    })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const newId = uuid()

    if (this.state.title === '') return

    db.ref(`posts/${newId}`)
      .set({
        title: this.state.title,
        body: '',
      })
      .then((res) => {
        this.props.history.push(`/post/${newId}`)
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>
        <h1 className='mt-4 mb-4 text-center'>Create or Edit a Post</h1>
        <form onSubmit={this.onSubmit}>
          <div className='input-group mb-3'>
            <input
              type='text'
              name='title'
              className='form-control'
              placeholder='Create a post...'
              value={this.state.title}
              onChange={this.onChange}
            />
            <div className='input-group-append'>
              <button className='btn btn-success' type='submit'>
                Create
              </button>
            </div>
          </div>
        </form>
        <div className='text-center'>
          {this.state.posts.map((post) => (
            <div className='mt-4 mb-4' key={post.key}>
              <Link to={`/post/${post.key}`} className='post-link'>
                <h2>{post.title}</h2>
                <hr />
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Home
