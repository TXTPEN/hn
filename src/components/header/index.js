import { h, Component } from 'preact';
import style from './style.less';

const HNLogo = "data:image/svg+xml;base64,PHN2ZyBpZD0naG4tbG9nbycgdmlld0JveD0iMCAwIDI1NiAyNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PGc+PHJlY3QgZmlsbD0iI0ZCNjUxRSIgeD0iMCIgeT0iMCIgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiPjwvcmVjdD48cGF0aCBkPSJNMTE5LjM3MzY1MywxNDQuNzQ1ODEzIEw3NS40MzI5Niw2Mi40MzE1NzMzIEw5NS41MTQ0NTMzLDYyLjQzMTU3MzMgTDEyMS4zNjE5MiwxMTQuNTI0MTYgQzEyMS43NTk1NzUsMTE1LjQ1MjAyMiAxMjIuMjIzNSwxMTYuNDEzMDA4IDEyMi43NTM3MDcsMTE3LjQwNzE0NyBDMTIzLjI4MzkxNCwxMTguNDAxMjg1IDEyMy43NDc4MzgsMTE5LjQyODU0NiAxMjQuMTQ1NDkzLDEyMC40ODg5NiBDMTI0LjQxMDU5NywxMjAuODg2NjE1IDEyNC42MDk0MjIsMTIxLjI1MTEyNyAxMjQuNzQxOTczLDEyMS41ODI1MDcgQzEyNC44NzQ1MjUsMTIxLjkxMzg4NiAxMjUuMDA3MDc1LDEyMi4yMTIxMjMgMTI1LjEzOTYyNywxMjIuNDc3MjI3IEMxMjUuODAyMzg2LDEyMy44MDI3NDQgMTI2LjM5ODg2LDEyNS4wOTUxMDUgMTI2LjkyOTA2NywxMjYuMzU0MzQ3IEMxMjcuNDU5Mjc0LDEyNy42MTM1ODkgMTI3LjkyMzE5OCwxMjguNzczMzk5IDEyOC4zMjA4NTMsMTI5LjgzMzgxMyBDMTI5LjM4MTI2OCwxMjcuNTgwNDMzIDEzMC41NDEwNzgsMTI1LjE2MTQgMTMxLjgwMDMyLDEyMi41NzY2NCBDMTMzLjA1OTU2MiwxMTkuOTkxODggMTM0LjM1MTkyMiwxMTcuMzA3NzQ3IDEzNS42Nzc0NCwxMTQuNTI0MTYgTDE2MS45MjI1Niw2Mi40MzE1NzMzIEwxODAuNjEyMjY3LDYyLjQzMTU3MzMgTDEzNi4yNzM5MiwxNDUuNzM5OTQ3IEwxMzYuMjczOTIsMTk4LjgyNjY2NyBMMTE5LjM3MzY1MywxOTguODI2NjY3IEwxMTkuMzczNjUzLDE0NC43NDU4MTMgWiIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPjwvZz48L3N2Zz4=";
export default class Header extends Component {
  render() {
    return (
      <header class={style.header}>
        <a target="_blank" href={"https://news.ycombinator.com/item?id=" + this.props.id}>
          <img src={HNLogo} alt="Hacker News Logo"/>
        </a>
        <p> on: <a target="_blank" href={"https://news.ycombinator.com/item?id=" + this.props.id}>
          {this.props.title}
          </a>
        </p>
      </header>
    );
  }
}