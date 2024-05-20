!function(){var t,e,n,r,o={8880:function(t,e){"use strict";e.Z='<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Preview</title>\n    <style>\n      * {\n        padding: 0;\n        margin: 0;\n      }\n    </style>\n  </head>\n  <body>\n    <script>\n      window.addEventListener("load", () => {\n        console.log(\'init\', window.parent.postMessage)\n        window.parent.postMessage({\n          type: \'init\',\n        }, \'*\');\n      });\n      window.addEventListener("message", ({ data }) => {\n        const appSrcTag = document.querySelector("#appSrc");\n        const oldSrc = appSrcTag.getAttribute("src");\n        appSrcTag.remove();\n\n        // \u63D2\u5165\u65B0app\n        const script = document.createElement("script");\n        const newSrc = URL.createObjectURL(\n          new Blob([data], {\n            type: "application/javascript",\n          })\n        );\n        script.src = newSrc;\n        script.id = "appSrc";\n        script.type = "module";\n        document.body.appendChild(script);\n        URL.revokeObjectURL(oldSrc);\n      });\n    <\/script>\n    <script type="importmap">\n      {\n        "imports": {\n          "react": "https://esm.sh/react@18.2.0",\n          "react-dom/client": "https://esm.sh/react-dom@18.2.0"\n        }\n      }\n    <\/script>\n    <script type="module" id="appSrc"><\/script>\n\n    <div id="root">\n      <div\n        style="\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n        "\n      >\n        Loading...\n      </div>\n    </div>\n  </body>\n</html>\n'},6930:function(t,e,n){"use strict";n("6330"),n("8221"),n("5863");var r=n("5893"),o=n("7294"),i=n("1644"),c=n("7392"),s=n("8880");n("6285");function a(t){return(0,i.transform)(t,{presets:["react","typescript"],filename:"temp.tsx"}).code}e.Z=function(){var t;let e,n=URL.createObjectURL(new Blob([s.Z],{type:"text/html"})),i=(0,o.useRef)(null);function u(t){if("init"===t.data.type){var e,n,r,o;console.log("iframeRef.current?.contentWindow?.postMessage=>",null===(n=i.current)||void 0===n?void 0:null===(e=n.contentWindow)||void 0===e?void 0:e.postMessage),null===(o=i.current)||void 0===o||null===(r=o.contentWindow)||void 0===r||r.postMessage(a(l))}}let l=`
  import React, { useState } from "react";
  import ReactDOM from 'react-dom/client';

  function App() {
    const style = {
      width: '60vw',
      margin: '100px auto',
    }
    const [num, setNum] = useState(0)
  
    return (
      <div style={style}>
        <h1>hello playground</h1>
        <div>num is {num}</div>
        <button onClick={() => setNum((prevNum) => prevNum + 1)}>add num</button>
      </div>
    );
  }
  
  const root = document.getElementById('root')
  ReactDOM.createRoot(root).render(React.createElement(App, null))
  `;(0,o.useEffect)(()=>(window.addEventListener("message",u),()=>{window.removeEventListener("message",u)}),[]);return(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:"item",children:(0,r.jsx)(c.ML,{height:"500px",defaultLanguage:"javascript",defaultValue:l,onChange:(t=t=>{var e,n;t&&(null===(n=i.current)||void 0===n||null===(e=n.contentWindow)||void 0===e||e.postMessage(a(t)))},function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];clearTimeout(e),e=setTimeout(()=>{t.apply(this,r)},500)})})}),(0,r.jsx)("div",{className:"item",children:(0,r.jsx)("iframe",{ref:i,src:n,style:{width:"100%",height:"100%"}})})]})}},9506:function(t,e,n){"use strict";var r=n("5893"),o=n("7294"),i=n("745"),c=n("6930");i.createRoot(document.getElementById("root")).render((0,r.jsx)(o.StrictMode,{children:(0,r.jsx)(c.Z,{})}))},6285:function(t,e,n){"use strict";n.r(t.exports={})}},i={};function c(t){var e=i[t];if(void 0!==e)return e.exports;var n=i[t]={exports:{}};return o[t].call(n.exports,n,n.exports,c),n.exports}c.m=o,c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,{a:e}),e},c.d=function(t,e){for(var n in e)c.o(e,n)&&!c.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},c.k=function(t){return""+t+".css"},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(t){if("object"==typeof window)return window}}(),c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t=[],c.O=function(e,n,r,o){if(n){o=o||0;for(var i=t.length;i>0&&t[i-1][2]>o;i--)t[i]=t[i-1];t[i]=[n,r,o];return}for(var s=1/0,i=0;i<t.length;i++){for(var n=t[i][0],r=t[i][1],o=t[i][2],a=!0,u=0;u<n.length;u++)s>=o&&Object.keys(c.O).every(function(t){return c.O[t](n[u])})?n.splice(u--,1):(a=!1,o<s&&(s=o));if(a){t.splice(i--,1);var l=r();void 0!==l&&(e=l)}}return e},c.p="./",e={980:0},c.O.j=function(t){return 0===e[t]},n=function(t,n){var r=n[0],o=n[1],i=n[2],s,a,u=0;if(r.some(function(t){return 0!==e[t]})){for(s in o)c.o(o,s)&&(c.m[s]=o[s]);if(i)var l=i(c)}for(t&&t(n);u<r.length;u++)a=r[u],c.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return c.O(l)},(r=self.webpackChunkmy_playground=self.webpackChunkmy_playground||[]).forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r));var s=c.O(void 0,["126","361","142"],function(){return c("9506")});c.O(s)}();