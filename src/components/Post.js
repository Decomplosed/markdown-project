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

    this.state = {
      mdBody: '',
    }
  }

  componentDidMount() {
    this.postFBRef.on('value', (snapshot) => {
      if (!snapshot.val()) return

      this.titleRef.current &&
        (this.titleRef.current.value = snapshot.val().title)
      this.bodyRef.current && (this.bodyRef.current.value = snapshot.val().body)
      this.setState({
        mdBody: snapshot.val().body,
      })
    })
  }

  onChange = () => {
    this.postFBRef
      .set({
        title: this.titleRef.current.value,
        body: this.bodyRef.current.value,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <>
        <div className='row'>
          <div className='col col-sm-12 mt-2'>
            <Link to='/' className='home-link'>
              <i class='fas fa-home'></i>
              Home
            </Link>
          </div>
          <div className='col col-sm-12'>
            <input
              className='post-title-input'
              type='text'
              ref={this.titleRef}
              placeholder='Title'
              onChange={this.onChange}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col col-sm-6'>
            <textarea
              className='form-control'
              placeholder='Post body...'
              ref={this.bodyRef}
              type='text'
              onChange={this.onChange}
              rows={30}
            />
          </div>
          <div className='col col-sm-6'>
            <ReactMarkdown
              source={this.state.mdBody}
              className='markdown-preview'
            />
          </div>
        </div>
      </>
    )
  }
}

export default Post
