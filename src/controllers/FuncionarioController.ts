import { Request, Response } from "express";
import { FuncionarioService } from "../services/FuncionarioService.js";
import { Professor } from "../domain/entities/Professor.js";
import { Administrativo } from "../domain/entities/Administrativo.js";

const service = new FuncionarioService();

export class FuncionarioController {
  static async listar(req: Request, res: Response) {
    const funcionarios = await service.listar();
    return res.json(funcionarios);
  }

  static async cadastrar(req: Request, res: Response) {
    const { nome, idade, cpf, tipo, titulacao, setor } = req.body;

    let novoFuncionario;
    if (tipo === "professor") {
      novoFuncionario = new Professor();
      novoFuncionario.nome = nome;
      novoFuncionario.idade = idade;
      novoFuncionario.cpf = cpf;
      novoFuncionario.titulacao = titulacao;
    } else if (tipo === "administrativo") {
      novoFuncionario = new Administrativo();
      novoFuncionario.nome = nome;
      novoFuncionario.idade = idade;
      novoFuncionario.cpf = cpf;
      novoFuncionario.setor = setor;
    } else {
      return res.status(400).json({ erro: "Tipo de funcionário inválido" });
    }

    const cadastrado = await service.cadastrar(novoFuncionario);
    return res.status(201).json(cadastrado);
  }

  static async buscarPorCpf(req: Request, res: Response) {
    const { cpf } = req.params;
    const funcionario = await service.buscarPorCpf(cpf);
    if (!funcionario) return res.status(404).json({ erro: "Funcionário não encontrado" });
    return res.json(funcionario);
  }

  static async editar(req: Request, res: Response) {
    const { id } = req.params;
    const atualizados = await service.editar(Number(id), req.body);
    return res.json(atualizados);
  }

  static async excluir(req: Request, res: Response) {
    const { id } = req.params;
    await service.excluir(Number(id));
    return res.status(204).send();
  }
}
