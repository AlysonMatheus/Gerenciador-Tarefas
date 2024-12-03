import { Router } from "express";
import { AppDataSource } from "../configuracao/bancoDados";
import { Tarefa } from "../entidades/Tarefa";

const router = Router();

router.get("/api", async (_, res) => {
  const tarefas = await AppDataSource.getRepository(Tarefa).find();
  res.json(tarefas);
});

router.post("/api", async (req, res) => {
  const { titulo, descricao } = req.body;
  const tarefa = AppDataSource.getRepository(Tarefa).create({ titulo, descricao });
  const resultado = await AppDataSource.getRepository(Tarefa).save(tarefa);
  res.json(resultado);
});

router.put("/api/:id", async (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, concluida } = req.body;
  const repositorioTarefa = AppDataSource.getRepository(Tarefa);
  const tarefa = await repositorioTarefa.findOneBy({ id: parseInt(id) });
  if (tarefa) {
    tarefa.titulo = titulo;
    tarefa.descricao = descricao;
    tarefa.concluida = concluida;
    const resultado = await repositorioTarefa.save(tarefa);
    res.json(resultado);
  } else {
    res.status(404).send("Tarefa não encontrada");
  }
});

router.delete("/api/:id", async (req, res) => {
  const { id } = req.params;
  const resultado = await AppDataSource.getRepository(Tarefa).delete(id);
  res.json(resultado);
});

export default router;
