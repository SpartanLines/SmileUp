import React, { Component } from 'react';

import './App.css';
import {puns} from './stuff';


class App extends Component {

    state = {
      response: '',
      puns: puns.puns,
      mode:"choose"
      
    };
  
    componentDidMount() {
      this.callApi()
        .then(res => this.setState({ response: res.express }))
        .catch(err => console.log(err));
    }
  
    callApi = async () => {
      const response = await fetch('/api/hello');
      const body = await response.json();
  
      if (response.status !== 200) throw Error(body.message);
  
      return body;
    };
    punHandler=()=>{
      this.setState({mode:"puns"});
    }
    pickHandler=()=>{
      this.setState({mode:"pick"});
    }
    quoteHandler=()=>{
      this.setState({mode:"quote"});
    }
    factHandler=()=>{
      this.setState({mode:"fact"});
    }
    safetyHandler=()=>{
      this.setState({mode:"safety"});
    }
    menuHandler=()=>{
      this.setState({mode:"choose"});
    }
   
  render() {
    let mypuns=this.state.puns.map((pun,index)=>(
      <div key={index}>
        <h3>{pun.Puns}</h3>  
      </div>
    ));

    
    return (
      <div className="App">
       
        {this.state.mode==="choose"?
                  <div>
                  <h1>el 3eeb fehom</h1>
                  <button className="btn waves-effect waves-light" onClick={this.punHandler}>Puns </button>
                  <button className="btn waves-effect waves-light" onClick={this.pickHandler}>Pick Me Up! </button>      
                  <button className="btn waves-effect waves-light" onClick={this.factHandler}>Facts </button>
                  <button className="btn waves-effect waves-light" onClick={this.quoteHandler}>Inspire Me! </button>
                  </div>
        :this.state.mode==="puns"?
        <div>
         <button onClick={this.menuHandler}>back</button> 
        {mypuns}
        </div>:null
        }
      </div>
    );
  }
}

export default App;
