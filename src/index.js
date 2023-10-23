import  React from "react";
// import  ReactDOM from "react-dom";
import {createRoot} from 'react-dom/client';
import App from "./App";
import './index.css'

// const element=React.createElement(
//   'div',
//   {id:'app',className:'container'},
//   'Hello world'
// )

// const element=(
// <div id ="app" className="container">
// Hello
// </div>)





const rootElement=document.getElementById('root')
// ReactDOM.render(element,root)
const root=createRoot(rootElement);
// ReactDOM.createRoot(element,root)
root.render( <App/>)
