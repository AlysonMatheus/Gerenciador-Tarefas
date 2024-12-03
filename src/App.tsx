import React from "react";
import Formulario from "./frontend/componentes/Formulario";
import ListaTarefas from "./frontend/componentes/ListaTarefas";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gerenciador de Tarefas</h1>
      </header>
      <main>
        <Formulario />
        <ListaTarefas />
      </main>
    </div>
  );
}

export default App;
