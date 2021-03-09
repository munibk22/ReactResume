import React from 'react'
import ReactDOM from 'react-dom'

export default function Test() {
    return (
        <div>
            <h2> Hello User: Munib</h2>
           
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
      <Test />
    </React.StrictMode>,
    document.getElementById('testRoot')
  );
