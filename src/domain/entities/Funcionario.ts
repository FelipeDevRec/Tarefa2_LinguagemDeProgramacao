import { Entity, PrimaryGeneratedColumn, Column, TableInheritance } from "typeorm";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export abstract class Funcionario {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  nome?: string;

  @Column()
  idade?: number;

  @Column({ unique: true })
  cpf?: string;
}
