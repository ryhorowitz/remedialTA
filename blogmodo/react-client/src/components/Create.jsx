import React from 'react';
import moment from 'moment';

class Create extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      imageUrl: '',
      body: ''
      // timestamp?
    };
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  handleChange(e) {
    console.log('e.target.name', e.target.name)
    console.log('e.target.value', e.target.value)
    this.setState( {
      [e.target.name]: e.target.value
    })
  }

  render() {
// add state to formData
// onChange={this.handleChange}
    return (
    <div className="create">
      <div className="create-editor">
        <h2>AUTHOR</h2>
        <form id='create' name='create' onSubmit={this.handleSubmit}>
          <input className="create-input"
            type="text"
            id='title'
            name='title'
            value=''
            placeholder="Post Title"
            onChange={this.handleChange}>
          </input>
          <input
            className="create-input"
            type="text"
            value=''
            id='author'
            name='author'
            placeholder="Author"
            onChange={this.handleChange}>
            </input>
          <input
            className="create-input"
            type="text"
            value=''
            id='image-url'
            name='image-url'
            placeholder="Image URL"
            onChange={this.handleChange}>
          </input>
          <textarea
            className="create-body-textarea"
            value=''
            id='body'
            name='body'
            value=''
            placeholder="Post Body"
            onChange={this.handleChange}>
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