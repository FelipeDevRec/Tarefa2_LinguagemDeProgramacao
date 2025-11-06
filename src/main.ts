import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./dataSource";
import { FuncionarioController } from "./controllers/FuncionarioController";

const app = express();
app.use(express.json());

app.get("/funcionarios", FuncionarioController.listar);
app.post("/funcionarios", FuncionarioController.cadastrar);
app.get("/funcionarios/:cpf", FuncionarioController.buscarPorCpf);
app.put("/funcionarios/:id", FuncionarioController.editar);
app.delete("/funcionarios/:id", FuncionarioController.excluir);


const PORT = 3000;

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("Erro ao iniciar o banco de dados:", err);
  });
