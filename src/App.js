import React,{ Component } from 'react';
import fetch from 'node-fetch';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      month:'',
      name:'',
      color:''
    }
  }

  componentWillMount(){
    const URL = 'http://localhost:8080/api/sample/getBirthStone'
    fetch(URL, {mode:'cors'})
    .then(res => res.json())
    .then(json =>{
      this.setState({
        month: json['month'],
        name: json['name'],
        color: json['color']
      })     
    });
  }

  render(){
    return <div className="App">
        month: {this.state.month}<br />
        name: {this.state.name}<br />
        color: {this.state.color}<br />
    </div>
  }
  
}

export default App;
