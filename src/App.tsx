import React, { useEffect, useState } from "react";
import axios from "axios"; 


interface Tarefa {
  id: number;
  titulo: string;
  descricao: string;
  concluida: boolean;
}

const App: React.FC = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); 
  useEffect(() => {
  
    const fetchTarefas = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/tarefa"); 
        setTarefas(response.data);
        setLoading(false); 
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error); 
        setError("Erro ao carregar tarefas"); // 
        setLoading(false);
      }
    };

    fetchTarefas(); 
  }, []);

  if (loading) {
    return <div>Carregando tarefas...</div>; // 
  }

  if (error) {
    return <div>{error}</div>; 
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Tarefas</h1>
        <ul>
          {tarefas.map((tarefa) => (
            <li key={tarefa.id}>
              <h3>{tarefa.titulo}</h3>
              <p>{tarefa.descricao}</p>
              <span>{tarefa.concluida ? "Concluída" : "Não concluída"}</span>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default App;
