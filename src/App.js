import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactHook from './ReackHook';

class App extends Component {
  // Initialization
  constructor(props, state){
    super(props, state);
    this.state = { count:0 };
  };
  render() {
    const {count} = this.state;  // destructuring
    return ( 
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Dipendra Shekhawat</h1>
          <p>This is a basic example of Class and Functional component. <br/> I have used Hooks to maintain state in functional component.</p>
          <p>You clicked {count} times</p>
            <button className="Button" onClick={() => this.setState({count:count + 1})}>
                Click Me of Class Component
            </button>
          <ReactHook/>
        </header>
      </div>
     );
  }
}
 


export default App;
