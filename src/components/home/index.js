import { h, Component } from 'preact';
import style from './style.less';
import Comments from './comments';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let indicator = "";
    if (this.props.posted) {
        if (this.props.loading) {
            indicator = "Loading..."
        }
    }
    else {
        indicator = "This url is not posted on HN."
    }

    return (
      <div class={style.home}>
        <h4>{indicator}</h4>
        <Comments comments={this.props.comments} />
      </div>
    );
  }
}
