import { Funcionario } from "../domain/entities/Funcionario.js";
import { FuncionarioRepository } from "../repository/FuncionarioRepository.js";

export class FuncionarioService {
  private repo = new FuncionarioRepository();

  async cadastrar(funcionario: Funcionario) {
    return this.repo.save(funcionario);
  }

  async listar() {
    return this.repo.findAll();
  }

  async buscarPorCpf(cpf: string) {
    return this.repo.findByCpf(cpf);
  }

  async editar(id: number, dados: Partial<Funcionario>) {
    return this.repo.update(id, dados);
  }

  async excluir(id: number) {
    return this.repo.remove(id);
  }
}
