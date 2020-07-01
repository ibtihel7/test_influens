import React, { Component } from 'react';
import config from './config'
import './App.css';

class App extends Component{ 
constructor (){
  super ()
  // firebase.initializeApp(config) 

  // !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
  //  this.ref=  config.database().ref ('Influencers')

this.state ={
  todos: {}
}

}


componentDidMount() {
  const ref = config.database().ref('Influencers')
  ref.on('value', snapShot => {
    let data = snapShot.val() ;
    console.log(data);    
    let todoItems = {...data};
    this.setState({
      todos: todoItems,
    });
  });
}




render (){


const persos = Object.keys(this.state.todos).map(key=>{
  return <div><p key = {key}> {this.state.todos[key].Profil.name}</p>
  <p key = {key}> {this.state.todos[key].Profil.email}</p>
   <img src= {this.state.todos[key].Profil.banner} />
  <br/>   <br/>

  </div>
})
  return (
    <div >
      {persos}
      hello
    </div>
  )

}
}
export default App;



// var database= fire.database()
// console.log(database);
