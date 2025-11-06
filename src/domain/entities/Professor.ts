import { ChildEntity, Column } from "typeorm";
import { Funcionario } from "./Funcionario.js";

@ChildEntity()
export class Professor extends Funcionario {
  @Column()
  titulacao?: string;
}
