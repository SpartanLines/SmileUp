import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './App.css';
import {picks,puns,quotes,facts} from './stuff';


class App extends Component {

    state = {
      response: '',
      picks: picks.puns,
      current_pick:0,
      facts: facts.facts,
      current_fact:0,
      puns: puns.puns,
      current_pun:0,
      quotes: quotes.quotes,
      current_quote:0,
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
      this.setState({mode:"picks"});
    }
    quoteHandler=()=>{
      this.setState({mode:"quotes"});
    }
    factHandler=()=>{
      this.setState({mode:"facts"});
    }
    safetyHandler=()=>{
      this.setState({mode:"safety"});
    }
    menuHandler=()=>{
      this.setState({mode:"choose"});
    }
    nextPun=()=>{
      let pun_index=this.state.current_pun+1;
    
      this.setState({current_pun:pun_index});
    }
    nextPick=()=>{
      let pun_index=this.state.current_pick+1;
      this.setState({current_pick:pun_index});
    }
    nextFact=()=>{
      let pun_index=this.state.current_fact+1;
      this.setState({current_fact:pun_index});
    }
    nextQuote=()=>{
      let pun_index=this.state.current_quote+1;
      this.setState({current_quote:pun_index});
    }
   
  render() {
    let mypicks=this.state.picks.map((pick,index)=>(
      <div key={index}>
        <h3 className="written">{pick.Puns}</h3>  
      </div>
    ));
    let mypuns=this.state.puns.map((pun,index)=>(
      <div key={index}>
        <h3 className="written">{pun.Pun}</h3>  
      </div>
    ));
    let myquotes=this.state.quotes.map((quote,index)=>(
      <div key={index}>
        <h3 className="written">{quote.Quotes}</h3>  
      </div>
    ));
    let myfacts=this.state.facts.map((fact,index)=>(
      <div key={index}>
        <h3 className="written">{fact.Facts}</h3>  
      </div>
    ));

    
    return (
      <div className="App">
        <div className="wrapper">
        {this.state.mode==="choose"?
                  <div className="row">
                  <h1 className="title">Smile UP</h1>
                  <h5 className="title">3oom wetmakhtar</h5>
                  <button className="btn waves-effect waves-light col s10 offset-s1 z-depth-3" onClick={this.punHandler}>Puns </button>
                  <button className="btn waves-effect waves-light col s10 offset-s1" onClick={this.pickHandler}>Pick Me Up! </button>      
                  <button className="btn waves-effect waves-light col s10 offset-s1" onClick={this.factHandler}>Facts </button>
                  <button className="btn waves-effect waves-light col s10 offset-s1" onClick={this.quoteHandler}>Inspire Me! </button>
                  <button className="btn waves-effect waves-light col s10 offset-s1 red safety pulse" onClick={this.safetyHandler}>Safety </button>

                  </div>
        :null}
        {this.state.mode==="picks"? 
        <div>
          <h1>Pick Up Lines </h1>
         <button className="btn blue" onClick={this.menuHandler}> GET ME OUT OF HEREE! </button> 
        {mypicks[this.state.current_pick]}
        <button onClick={this.nextPick} className="btn waves-effect waves-light col s8 offset-s2 more">ANOTHER ONE!</button>
        </div>:null}{
          this.state.mode==="puns"?
        <div>
           <h1>Puns</h1>
           <button className="btn blue" onClick={this.menuHandler}>GET ME OUT OF HEREE! </button> 
        {mypuns[this.state.current_pun]}
        <button onClick={this.nextPun} className="btn waves-effect waves-light col s8 offset-s2 more">ANOTHER ONE!</button>
        </div>:null}{this.state.mode==="facts"?
        <div>
           <h1>Facts</h1>
           <button className="btn blue" onClick={this.menuHandler}>GET ME OUT OF HEREE! </button> 
        {myfacts[this.state.current_fact]}
        <button onClick={this.nextFact} className="btn waves-effect waves-light col s8 offset-s2 more">ANOTHER ONE!</button>
        </div>:null}{this.state.mode==="quotes"?
        <div>
           <h1>Quotes</h1>
           <button className="btn blue" onClick={this.menuHandler}>GET ME OUT OF HEREE! </button> 
        {myquotes[this.state.current_quote]}
        <button onClick={this.nextQuote} className="btn waves-effect waves-light col s8 offset-s2 more">ANOTHER ONE!</button>
        </div>:null
        }{this.state.mode==="safety"?
        <div>
           <h1>Alarm</h1>
           <button className="btn blue" onClick={this.menuHandler}>GET ME OUT OF HEREE! </button> 
           <ReactAudioPlayer src="old-fashioned-door-bell-daniel_simon.mp3" controls autoPlay loop className="audio" />
        </div>:null
        }
        
    
      </div>
      </div>
    );
  }
}

export default App;
