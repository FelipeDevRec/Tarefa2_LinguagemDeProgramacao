import { ChildEntity, Column } from "typeorm";
import { Funcionario } from "./Funcionario";

@ChildEntity()
export class Administrativo extends Funcionario {
  @Column()
  setor?: string;
}
