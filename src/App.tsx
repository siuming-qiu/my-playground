import { useEffect, useRef, useState } from "react";
import { transform } from "@babel/standalone";
import { Editor } from "@monaco-editor/react";
// @ts-ignore
import iframeRaw from "raw-loader!./iframe.html";
import "./App.css";
type TimerId = ReturnType<typeof setTimeout>;

function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timerId: TimerId;

  return function (...args: Parameters<T>): void {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      // @ts-ignore
      func.apply(this, args);
    }, delay);
  };
}
function compiler(value: any) {
  return transform(value, {
    presets: ["react", "typescript"],
    filename: "temp.tsx",
  }).code;
}
function App() {
  const iframeUrl = URL.createObjectURL(
    new Blob([iframeRaw], { type: "text/html" })
  );
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const onChange = (value?: string) => {
    if (!value) {
      return;
    }
    
    iframeRef.current?.contentWindow?.postMessage(compiler(value));
  };
  function onInit(data: any) {
    if (data.data.type === 'init') {
      console.log('iframeRef.current?.contentWindow?.postMessage=>', iframeRef.current?.contentWindow?.postMessage);
      iframeRef.current?.contentWindow?.postMessage(compiler(code)); 
    }
  }

  const code = `
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
  `;
  useEffect(() => {
    window.addEventListener('message', onInit)
    return () => {
      window.removeEventListener('message', onInit)
    }
  }, [])
  return (
    <div className='container'>
      <div className='item'>
        <Editor
          height='500px'
          defaultLanguage='javascript'
          defaultValue={code}
          onChange={debounce(onChange, 500)}
        />
      </div>
      <div className='item'>
        <iframe
          ref={iframeRef}
          src={iframeUrl}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}

export default App;
