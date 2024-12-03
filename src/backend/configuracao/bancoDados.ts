import { DataSource } from "typeorm";
import { Tarefa } from "../entidades/Tarefa";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "",
  password: "",
  database: "gerenciador",
  synchronize: true,
  entities: [Tarefa],
});
