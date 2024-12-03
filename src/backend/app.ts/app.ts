import express from "express";
import cors from "cors";
import rotasTarefas from "../rotas/rotasTarefas";
import { AppDataSource } from "../configuracao/bancoDados";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", rotasTarefas);

AppDataSource.initialize()
  .then(() => {
    app.listen(3000, () => {
      console.log("Servidor rodando em http://localhost:3000");
    });
  })
  .catch((error) => console.log("Erro ao conectar ao banco de dados:", error));
