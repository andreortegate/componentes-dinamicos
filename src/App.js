import React from "react";
import HelloWorld from "./components/hello"

class App extends React.Component {
   atributos = [
    "Hola",
    "Hola",
    "Hola",
    "Mundo"
  ]
  render() {
    return (
    <div>

      {this.atributos.map((text, index)=> <HelloWorld key={index} name={text}/>)}

    </div>
    )
  }
}

export default App;
