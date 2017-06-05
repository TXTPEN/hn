import { h, Component } from 'preact';

import Header from './header';
import Home from './home';

function fetchStory(url) {
  return fetch("https://hn.algolia.com/api/v1/search?query=" + url)
  .then((res) => {
    if (res.status >= 200 && res.status < 300)
      return Promise.resolve(res);
    return Promise.reject(new Error(res.statusText));
  })
  .then((res) => res.json())
  .then((data) => Promise.resolve({size: data.nbHits, results: data.hits}));
}

function getTopMatchID(data) {
  if (data.size === 0)
    return Promise.reject(new Error("not posted on HN"));
  return Promise.resolve(data.results.filter((a)=>a.parent_id == null)[0].objectID);
}

function fetchCommentsByID(id) {
  return fetch("https://hn.algolia.com/api/v1/items/" + id)
  .then((res) => {
    if (res.status >= 200 && res.status < 300)
      return Promise.resolve(res);
    return Promise.reject(new Error(res.statusText));
  })
  .then((res) => res.json());
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posted: true,
      loading: true,
      comments: []
    };
    if (this.props.id) {
      fetchCommentsByID(this.props.id)
      .then((comments) => {
        this.setState({loading: false, comments});
      });
    } else {
      const url = document.URL;
      // url = "https://danwang.co/why-so-few-computer-science-majors?idk"
      fetchStory(url)
      .then(getTopMatchID)
      .then(fetchCommentsByID)
      .then((comments) => {
        this.setState({loading: false, comments});
      })
      .catch((e) =>{
        this.setState({loading: true, posted: false});
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
        <Home loading={this.state.loading} posted={this.state.posted} comments={this.state.comments} />
      </div>
    );
  }
}
