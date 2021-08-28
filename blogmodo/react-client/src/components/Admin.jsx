import React from 'react';
import moment from 'moment';

const Admin = (props) => { //array of posts

  // [ ] Create a new Admin component, which will render a list of blog posts showing. Each item in the list should display the blog post's title, author, and views count.
  //map over props.posts
  const posts = props.posts;
  const entries = (posts) => {
    return posts.map( (post, i) => {
      const timeStamp = moment(post.createdAt).fromNow();
      return <li className="post-list-entry" key={i}>
        <div className="post-list-entry-title">{post.title}</div>
        <div className="post-list-entry-byline">{post.author} {timeStamp}</div>
        <div className="stats-list-item-views">Views: {post.views}</div>
      </li>;
    });
  };
  return (
    <div>
      <ul>
        {entries(posts)}
      </ul>
    </div>
  );
};

export default Admin;
