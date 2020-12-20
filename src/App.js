import './App.css';
import React, {Component} from "react";
import FetchData from "./Components/FetchData";
import Card from "./Components/Card";


class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      
      <div className="App">
                     


        <FetchData />
        
      </div>
    );
  }
}

export default App;