import { h, Component } from 'preact';
import style from './style.less';
import Comments from './comments';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const indicator = this.props.loading ? "Loading..." : "Comments:";
    return (
      <div class={style.home}>
        <h4>{indicator}</h4>
        <Comments comments={this.props.comments} />
      </div>
    );
  }
}
