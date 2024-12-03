import React, { useState } from "react";
import api from "../servicos/api";

const FormularioTarefa: React.FC = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [error, setError] = useState(""); // Adicionando um estado de erro
  const [success, setSuccess] = useState(false); // Estado para sucesso

  const adicionarTarefa = async () => {
    if (!titulo || !descricao) {
      setError("Por favor, preencha todos os campos!"); // Validação simples
      return;
    }
    try {
      await api.post("/tarefa", { titulo, descricao });
      setSuccess(true);
      setError(""); // Limpa a mensagem de erro
      setTitulo(""); // Limpa o campo de título
      setDescricao(""); // Limpa o campo de descrição
    } catch (err) {
      setError("Erro ao adicionar tarefa. Tente novamente mais tarde."); // Mensagem de erro
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
