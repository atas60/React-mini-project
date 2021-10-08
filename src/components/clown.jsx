import React, { Component } from 'react';
import { getEmojis, deleteTheClown, addClown, updateClown } from "../services/fakeEmojiDataBase";
import "../css/clown.css"
import "animate.css"


class clown extends Component {

    state = {
        // La state emoji est déclaré en type tableau car la base de donnée est aussi un type tableau
        // Si un type différent du type qui sera get est déclaré, cela entraine une erreur "this.state.emojis.map is not a function"
        emojis: [],
        // La state clown est déclaré au même type qu'un emoji, les emojis sont de type string
        clown: ""
      }
    
      // Permet de Get les données de la fausse base de donnée dès que le chargement de l'app est terminé
      // componentDidMount est une méthode de React qui se lance immédiatement après que l'app s'est chargé
      // C'est l'endroit idéale où on faire un appel "Get" en React
      componentDidMount() {
        this.setState({ emojis: getEmojis() })
      }
    
    
      handleDeleteClown = () => {
        console.log("clicked");
        this.setState({ emojis: deleteTheClown() })
      }
    
      handleAddClown = () => {
        this.setState({ emojis: addClown() })
      }
    
      handleChangeClown = () => {
        this.setState({ emojis: updateClown() })
      }




    render() { 
        return (
          <div id="clown" className="container">
          <div className="clown animate__animated animate__pulse animate__infinite ">
            <h1 className="title 	">
              Find The Clown
            </h1>
          </div>
          <div className="boxContainer">
            {this.state.emojis.map(emoji => <div key={emoji} className="box">
              {emoji}
            </div>)}

          </div>
          <div style={{ marginTop: "50px" }} className="container">
            <button className="animate__animated animate__bounce animate__infinite" onClick={this.handleAddClown} >
              Ajouter le 🤡
            </button>
            <button onClick={this.handleDeleteClown} >
              Supprimer le 🤡
            </button>
            <button onClick={this.handleChangeClown} >
              Modifier le 🤡
            </button>
          </div>
        </div>
        );
        
    }
}
 
export default clown;