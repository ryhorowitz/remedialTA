import React from 'react';
import moment from 'moment';

class Create extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      imageUrl: 'http://placecorgi.com/260/180',
      body: ''
      // timestamp?
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('/api/blogs/', {
      method: 'POST',
      body: JSON.stringify({
        title: this.state.title,
        author: this.state.author,
        imageUrl: this.state.imageUrl,
        body: this.state.body
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then( response => response.json())
    .then( json => console.log(json))
    .catch( err => console.error(err))
  }

  handleChange(e) {
    // console.log('e.target.name', e.target.name)
    // console.log('e.target.value', e.target.value)
    let key = e.target.name;
    let obj = {};
    obj[e.target.name] = e.target.value;
    this.setState(obj);
  }

  render() {
    return (
    <div className="create">
      <div className="create-editor">
        <h2>AUTHOR</h2>
        <form id='create' name='create' onSubmit={this.handleSubmit}>
          <input className="create-input"
            type="text"
            id='title'
            name='title'
            value={this.state.title}
            placeholder="Post Title"
            onChange={(e) => {this.handleChange(e)}}>
          </input>
          <input
            className="create-input"
            type="text"
            value={this.state.author}
            id='author'
            name='author'
            placeholder="Author"
             onChange={(e) => {this.handleChange(e)}}>
            </input>
          <input
            className="create-input"
            type="text"
            value={this.state.imageUrl}
            id='image-url'
            name='image-url'
            placeholder="Image URL"
             onChange={(e) => {this.handleChange(e)}}>
          </input>
          <textarea
            className="create-body-textarea"
            value={this.state.body}
            id='body'
            name='body'
            placeholder="Post Body"
             onChange={(e) => {this.handleChange(e)}}>
          </textarea>
          <button
            className="create-submit-button"
            type="submit">Save post
            </button>
        </form>
      </div>
      <div className="create-preview">
        <h2>PREVIEW</h2>
        {/* <!-- you'll use your framework of choice to implement live preview here --> */}
      </div>
    </div>
    )
  }
}

export default Create;