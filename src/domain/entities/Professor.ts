import { ChildEntity, Column } from "typeorm";
import { Funcionario } from "./Funcionario";

@ChildEntity()
export class Professor extends Funcionario {
  @Column()
  titulacao?: string;
}
