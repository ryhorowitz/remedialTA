import React from 'react';
import moment from 'moment';

const Feed = (props) => {

  const listItems = props.samples.map( (sample, i) => {
    let timeStamp = moment(sample.createdAt).fromNow();
    return <li className="feed-list-item" key={sample._id}>
      <div className="feed-list-item-title" onClick={props.handleClick}>{sample.title}</div>
      <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">{sample.author}</span> {timeStamp} </div>
      <img src={sample.imageUrl} onClick={props.handleClick} className="feed-list-item-image" />
      <span className="feed-list-item-lede">{props.pFormat(sample.body)} </span>
       <div className="feed-list-item-views">views: {sample.views}</div>
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
