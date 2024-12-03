import express from "express";
import cors from "cors";
import rotasTarefas from "./rotas/rotasTarefas";
import { AppDataSource } from "./backend/configuracao/bancoDados";

AppDataSource.initialize()
  .then(() => {
    console.log("Banco de dados conectado");
  })
  .catch((err: any) => console.error("Falha na conexão com o banco", err));

const app = express();

app.use(cors());
app.use(express.json());
app.use("/tarefas", rotasTarefas);

export default app;
