import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Create from './components/Create.jsx'
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
    this.updateViewCount = this.updateViewCount.bind(this);
    this.selectPost = this.selectPost.bind(this);
    this.changeView = this.changeView.bind(this);
    this.pFormat = this.pFormat.bind(this);
  }

  pFormat(body) {
    const splitParas = body.split('\n\n');
    const mappedParas = splitParas.map( (para, i) => <p key={i}>{para}</p>);
    return (
      <div>{mappedParas}</div>
    );
  }

  updateViewCount() {
    this.getPosts;
  }

  selectPost(e) {
    const title = e.target.parentNode.firstChild.innerText;
    const i = this.state.posts.findIndex( post => post.title === title);
    this.setState({
      selected: i,

    });
    this.changeView(sampleData[i].title);
  }

  changeView(option) {

    this.setState({
      view: option
    });
  }
  componentDidMount() {
    this.getPosts();
  }
  getPosts () {
    $.get({
      url: '/api/blogs',
      success: (data) => {
        console.log(data);
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
        pFormat={this.pFormat}
        handleClick={this.selectPost}
        samples={this.state.posts}/>;
    } else if (view === 'admin') {
      return <Admin posts={this.state.posts}/>;
    } else if (view === 'create') {
      return <Create/>
    } else {
      return <Post
        updateViewCount={this.updateViewCount}
        pFormat={this.pFormat}
        posts={this.state.posts}
        selected={this.state.selected}
        post={this.state.posts[this.state.selected]}/>;
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
          <span className={this.state.view === 'create'
            ? 'nav-selected'
            : 'nav-unselected'}
            onClick={() => this.changeView('create')}>
            Write a Post
          </span>
          <span className={this.state.view === 'admin'
            ? 'nav-selected'
            : 'nav-unselected'}
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
