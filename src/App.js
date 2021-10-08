import React, { Component } from 'react';
import "./App.css"

import Clown from "./components/clown";
import Prison from './components/prison';

class App extends Component {


  // // Une méthode qui permet de détecté les clown grâce à la méthode find() 
  // // Cette méthode retourne (return) l'emoji similaire à la condition (càd un clown) et le stocke dans une variable result
  // findTheClown = () => {
  //   const { emojis } = this.state;
  //   const result = emojis.find(emoji => emoji === "🤡")
  //   result.find
  //   this.setState
  // }


  render() {

    return (
      <>
      <Clown/>

      </>
    );
  }
}

export default App;