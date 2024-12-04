import React, { useState } from "react";
import api from "../servicos/api";

const FormularioTarefa: React.FC = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [error, setError] = useState(""); 
  const [success, setSuccess] = useState(false);

  const adicionarTarefa = async () => {
    try {
      console.log("Enviando dados:", { titulo, descricao });
      const response = await api.post("/", { titulo, descricao });
      console.log("Resposta do servidor:", response.data);
      setTitulo("");
      setDescricao("");
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
      alert("Erro ao adicionar tarefa. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="form-container">
      <h2>Adicionar Tarefa</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          adicionarTarefa();
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="input-field"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">Tarefa adicionada com sucesso!</p>}
        <button type="submit" className="submit-btn">
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default FormularioTarefa;
