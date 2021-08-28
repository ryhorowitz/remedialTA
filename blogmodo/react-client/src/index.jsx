import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Post from './components/Post.jsx';
import Feed from './components/Feed.jsx';
import Admin from './components/Admin.jsx';
import sampleData from './sample_data.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'feed',
      posts: sampleData, //[{},{},{},{}],
      selected: 0

    };
    this.selectPost = this.selectPost.bind(this);
    this.changeView = this.changeView.bind(this);
  }
  selectPost(e) {
    console.log('INNERTEXT IS', e.target.parentNode.firstChild.innerText);
    const title = e.target.parentNode.firstChild.innerText;
    //selected === sampleData where i.title equals title
    const i = this.state.posts.findIndex( post => post.title === title);
    this.setState({
      selected: i
    });
    this.changeView(sampleData[i].title);
  }
  // In the App component for your client, refactor the view switcher in such a way that setting the value of view will cause your new Admin component to be rendered.
  changeView(option) {

    this.setState({
      view: option
    });
  }
  componentDidMount() {

    $.get({
      url: '/api/blogs',
      success: (data) => {
        console.log(data);
        //do something with the data
        this.setState({
          posts: data
        });
      }
    });
  }
  renderView() {
    const {view} = this.state;
    // Refactor the navigation section of the App to allow the user to navigate to the Admin view by clicking "Admin" in the nav bar at the top of the app.
    if (view === 'feed') {
      return <Feed
        handleClick={this.selectPost}
        samples={this.state.posts}/>;
    } else if (view === 'admin') {
      return <Admin posts={this.state.posts}/>;
    } else {
      return <Post
        posts={this.state.posts}
        selected={this.state.selected}/>;
    }
  }
  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo"
            onClick={() => this.changeView('feed')}>
            BLOGMODO
          </span>
          <span className={this.state.view === 'feed'
            ? 'nav-selected'
            : 'nav-unselected'}
          onClick={() => this.changeView('feed')}>
            See all Posts
          </span>
          <span className="nav-unselected">
            Write a Post
          </span>
          <span className="nav-unselected"
            onClick={() => this.changeView('admin')}>
            Admin
          </span>
        </div>

        <div className="main">
          {this.renderView()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('blogmodo'));
