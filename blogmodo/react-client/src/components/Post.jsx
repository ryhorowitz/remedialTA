import React from 'react';
import moment from 'moment';
import $ from 'jquery';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  // Refactor your Post component in such a way that every time it is rendered, an AJAX PATCH request is made to the server route you have just created.
  componentDidMount () {
    //$.patch or maybe post
    const id = this.props.post._id;
    const param = $.param({'blogId': id});
    $.ajax({
      url: `/api/blogs/${param}`,
      method: 'PATCH', //might be post
      success: (data) => {
        console.log('PATCH SUCCESS CB VIEWS is', data.views);
        //call a function that updates parent state
        this.props.updateViewCount();
      }
    });
    console.log(id);
  }

  render() {
    const post = this.props.post;
    const timeStamp = moment(post.createdAt).fromNow();

    return (
      <div className="post">
        <h1 className="post-title">{post.title}</h1>
        <div className="post-byline"><span className="post-byline-author">author: {post.author}</span>   {timeStamp}</div>
        <img src={post.imageUrl} className="post-image"/>
        <div>{this.props.pFormat(post.body)}</div>
        <div>views: {post.views}</div>
      </div>
    );
  }
}

export default Post;
