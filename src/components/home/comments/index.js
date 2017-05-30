import { h, Component } from 'preact';
import style from './style.less';

// https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
function timeSince(date) {
  if (typeof date !== 'object') {
    date = new Date(date);
  }

  const seconds = Math.floor(((new Date().getTime()/1000) - date));
  let intervalType;

  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) {
    intervalType = 'year';
  } else {
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      intervalType = 'month';
    } else {
      interval = Math.floor(seconds / 86400);
      if (interval >= 1) {
        intervalType = 'day';
      } else {
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
          intervalType = "hour";
        } else {
          interval = Math.floor(seconds / 60);
          if (interval >= 1) {
            intervalType = "minute";
          } else {
            interval = seconds;
            intervalType = "second";
          }
        }
      }
    }
  }

  if (interval > 1 || interval === 0) {
    intervalType += 's';
  }

  return interval + ' ' + intervalType + ' ago';
}







class Child extends Component {
  constructor() {
    super();
    this.state = {
      hidden: false
    };
  }

  toggleHide() {
    this.setState({hidden: !this.state.hidden});
  }

  renderBody(comment) {
    if (this.state.hidden) return null;
    return (
      <div>
        <div className={style.body} dangerouslySetInnerHTML={{__html: comment.text}} />
        {renderChildren(comment.children)}
      </div>
    );
  }
  render(){
    const comment = this.props.comment;
    const topLevel = this.props.topLevel;

    if (comment && comment.text) {
      const timeString = timeSince(comment.created_at_i);
      return (
        <div className={topLevel ? "" : style.child_comment} id={"hacker-news-id-" + comment.id}>
          <div className={style.info}>
            <span className={style.username}>
              <a href={"https://news.ycombinator.com/user?id="+comment.author}>
                {comment.author}
              </a>
            </span>

            <span className={style.time}>
              <a href={"https://news.ycombinator.com/item?id="+comment.id}>
                {timeString}
              </a>
            </span>

            <span className={style.hidden} onClick={()=>this.toggleHide()}>
              {this.state.hidden ? "[+]" : "[-]"}
            </span>

          </div>
          {this.renderBody(comment)}
        </div>
      );
    }
    return null;
  }
}






const renderChildren = (children, topLevel=false) => {
  const sortedChildren = children.sort((a,b)=> b.created_at_i - a.created_at_i);
  return (
    <div class={style.comments}>
      {sortedChildren.map((c) => <Child comment={c} topLevel={topLevel} />)}
    </div>
  );
};







export default class Comments extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const children = this.props.comments.children;
    if (children) {
      return (
        <div>
          {renderChildren(children, true)}
        </div>
      );
    }
  }
}