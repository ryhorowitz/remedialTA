import React from 'react';

// const samplePosts: {
//   _id: string;
//   title: string;
//   author: string;
//   imageUrl: string;
//   createdAt: string;
//   body: string;
//   views: number;
// }[]
//map props
// return each <li> dynamically

const Feed = (props) => {
  const listItems = props.samples.map( (sample, i) => {
    return <li className="feed-list-item" key={sample._id}>
      <div className="feed-list-item-title" onClick={props.handleClick}>{sample.title}</div>
      <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">{sample.author}</span>{sample.createdAt}</div>
      <img src={sample.imageUrl} onClick={props.handleClick} className="feed-list-item-image" />
      <span className="feed-list-item-lede">{sample.body} </span>
    </li>;
  });

  return (
    <div className="feed">
      <ul>
        {listItems}
      </ul>
    </div>
  );
};

export default Feed;
