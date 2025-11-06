import { AppDataSource } from "../dataSource";
import { Funcionario } from "../domain/entities/Funcionario";

export class FuncionarioRepository {
  private repo = AppDataSource.getRepository(Funcionario);

  async save(funcionario: Funcionario) {
    return this.repo.save(funcionario);
  }

  async findAll() {
    return this.repo.find();
  }

  async findByCpf(cpf: string) {
    return this.repo.findOneBy({ cpf });
  }

  async update(id: number, dados: Partial<Funcionario>) {
    await this.repo.update(id, dados);
    return this.repo.findOneBy({ id });
  }

  async remove(id: number) {
    return this.repo.delete(id);
  }
}
