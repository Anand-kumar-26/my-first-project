import axios from 'axios'
import './App.css';
import React, { Component } from 'react'
import Data from './Data'

export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data: null
    }
  }
  componentDidMount(){
    axios.get('https://api.publicapis.org/entries').then(response => {
      this.setState({data: response.data.entries})
    })
  }
  render() {
    if(this.state.data === null){
      return "Loading"
    } 

    return (
      <div className='App'>
        <Data data={this.state.data}/>
      </div>
    )
  }
}

export default App
