import React from 'react';
import ReactDOM from 'react-dom';
import LocationDisplay from './LocationDisplay';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state={latitude:null}
    window.navigator.geolocation.getCurrentPosition(
      (position)=>{this.setState({latitude:position.coords.latitude})},
      (error)=>{this.setState({errorMessage:error.message})},
      
    );
  }
render(){
  if(this.state.errorMessage && !this.state.latitude){
    return <div style={{backgroundColor:'red',color:'white'}}><h1>Error:{this.state.errorMessage}</h1></div>
  }
  if(!this.state.errorMessage && this.state.latitude){
    return <div><LocationDisplay latitude={this.state.latitude}/></div>
  }
  else{
    return <div style={{backgroundColor:'green',color:'white'}}><h1>Waiting for user Permission</h1></div>
  }
 
}
}
ReactDOM.render(
<App />,
  document.querySelector('#root')
);