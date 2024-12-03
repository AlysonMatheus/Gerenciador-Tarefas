import React, { useState } from "react";
import api from "../servicos/api";

const FormularioTarefa: React.FC = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const adicionarTarefa = async () => {
    await api.post("/", { titulo, descricao });
    setTitulo("");
    setDescricao("");
  };

  return (
    <div>
      <h2>Adicionar Tarefa</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          adicionarTarefa();
        }}
      >
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default FormularioTarefa;
