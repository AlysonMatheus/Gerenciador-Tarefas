import React, { useEffect, useState } from "react";
import api from "../servicos/api";

interface Tarefa {
  id: number;
  titulo: string;
  descricao: string;
  concluida: boolean;
}

const ListaTarefas: React.FC = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  const carregarTarefas = async () => {
    const resposta = await api.get("/");
    setTarefas(resposta.data);
  };

  const excluirTarefa = async (id: number) => {
    await api.delete(`/${id}`);
    carregarTarefas();
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <strong>{tarefa.titulo}</strong> - {tarefa.descricao}{" "}
            {tarefa.concluida && <span>(Concluída)</span>}
            <button onClick={() => excluirTarefa(tarefa.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTarefas;
