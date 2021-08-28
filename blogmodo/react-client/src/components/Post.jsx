import React from 'react';
import moment from 'moment';

const pFormat = (body) => {
  const splitParas = body.split('\n\n');
  const mappedParas = splitParas.map( (para, i) => <p key={i}>{para}</p>);
  return (
    <div>{mappedParas}</div>
  );
};

const Post = (props) => {
  const posts = props.posts;
  const i = props.selected;
  const timeStamp = moment(posts[i].createdAt).fromNow();

  return (
    <div className="post">
      <h1 className="post-title">{posts[i].title}</h1>
      <div className="post-byline"><span className="post-byline-author">author: {posts[i].author}</span>   {timeStamp}</div>
      <img src={posts[i].imageUrl} className="post-image"/>
      <div>{pFormat(posts[i].body)}</div>
      <div>views: {posts[i].views}</div>
    </div>
  );
};

export default Post;
