import template from "~/core/template";
import render from "~/core/render";
import Header from "~/component/Header/Header";
import styles from "./index.module.scss";

console.log(styles)
const Index = () => {
  return template(`
      <div id="index_container">
        <div>asdasd</div>
        <div>asdasd</div>
        <div>asdasd</div>
        
      </div>
    `, "index")
}

Index.afterLoad = () => {
  render(Header)
}

Index.styles = styles

export default Index
