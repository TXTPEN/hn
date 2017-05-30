import { h, Component } from 'preact';
import style from './style.less';

console.log(style)

export default class Comments extends Component {
  constructor(props) {
    super(props);
  }

  renderChildren(comment){
    if (comment.text) {
      return (
        <div className={style.child_comment} id={"hacker-news-id-" + comment.id}>
          <div className={style.username}>
            <a href={"https://news.ycombinator.com/user?id="+comment.author}>
              {comment.author}
            </a>
          </div>
          <div dangerouslySetInnerHTML={{__html: comment.text}}></div>
          {this.renderChildren(comment.children)}
        </div>
      );
    }
  }

  render() {
    console.log(this.props.comments);
    const children = this.props.comments.children;
    if (this.props.comments.children) {
      return (
        <div class={style.comments}>
          {children.map((child) => this.renderChildren(child))}
        </div>
      )
    }
  }
}