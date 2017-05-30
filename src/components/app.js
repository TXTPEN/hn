import { h, Component } from 'preact';

import Header from './header';
import Home from './home';

const DAMPENED_COLOR = "#dbdbbd";
const DEFAULT_COLOR = "#fb651e";

function fetchStory(url) {
  return fetch("http://hn.algolia.com/api/v1/search?query=" + url)
  .then((res) => {
    if (res.status >= 200 && res.status < 300) {
      return Promise.resolve(res)
    } else {
      return Promise.reject(new Error(res.statusText))
    }
  })
  .then((res) => res.json())
  .then((data) => Promise.resolve({size: data.nbHits, results: data.hits}))
}

function getTopMatchID(data) {
  if (data.size === 0) {
    return Promise.reject(new Error("not posted on HN"));
  } else {
    return Promise.resolve(data.results[0].objectID);
  }
}

function fetchCommentsByID(id) {
  return fetch("http://hn.algolia.com/api/v1/items/" + id)
  .then((res) => {
    if (res.status >= 200 && res.status < 300) {
      return Promise.resolve(res)
    } else {
      return Promise.reject(new Error(res.statusText))
    }
  })
  .then((res) => res.json())
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      comments: []
    }
    if (this.props.id) {
      fetchCommentsByID(this.props.id)
      .then((comments) => {
        this.setState({loading: false, comments});
      });
    } else {
      var url = document.URL;
      url = "http://danwang.co/why-so-few-computer-science-majors?idk"
      fetchStory(url)
      .then(getTopMatchID)
      .then(fetchCommentsByID)
      .then((comments) => {
        this.setState({loading: false, comments});
      });
    }

  }
  render() {
    // console.log('rerender');
    return (
      <div id="app">
        <Header
          title={this.state.comments.title}
          id={this.state.comments.id}
        />
        <Home loading={this.state.loading} comments={this.state.comments} />
      </div>
    );
  }
}
