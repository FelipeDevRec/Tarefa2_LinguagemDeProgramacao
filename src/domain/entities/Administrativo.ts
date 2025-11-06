import { ChildEntity, Column } from "typeorm";
import { Funcionario } from "./Funcionario.js";

@ChildEntity()
export class Administrativo extends Funcionario {
  @Column()
  setor?: string;
}
