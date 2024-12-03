import { DataSource } from "typeorm";
import { Tarefa } from "../entidades/Tarefa";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "seu_usuario",
  password: "sua_senha",
  database: "gerenciador_tarefas",
  synchronize: true,
  entities: [Tarefa],
});
