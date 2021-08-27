import React from 'react';
import moment from 'moment';

// createdAt: '2017-11-14T05:57:26.037Z',
// moment(sample.createdAt); is an object.
const Feed = (props) => {
  //const relativeTime = moment.updateLocale('en');

  const listItems = props.samples.map( (sample, i) => {
    let timeStamp = moment(sample.createdAt).fromNow();
    return <li className="feed-list-item" key={sample._id}>
      <div className="feed-list-item-title" onClick={props.handleClick}>{sample.title}</div>
      <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">{sample.author}</span>{console.log('time is', timeStamp)} {timeStamp} </div>
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
