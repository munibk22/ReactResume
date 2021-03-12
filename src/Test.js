import React from 'react'


function Test() {
    return (
        <div>
            <h2> Hello User: Munib</h2>
           
        </div>
    )
}
class Football extends React.Component {
    shoot = (a) => {
      alert(a);
    }

    goal = ()=>{
 this.shoot("Goal2")
    }
    render() {
      return (
        <button onClick={this.goal}>Take the shot!</button>
      );
    }
  }

  export  {Football, Test}

/*  ReactDOM.render(
    <React.StrictMode>
      <Test />
      <Football />
    </React.StrictMode>,
    document.getElementById('testRoot')
  ); */
