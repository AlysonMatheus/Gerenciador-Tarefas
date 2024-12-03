import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Tarefa {
  @PrimaryGeneratedColumn()
  id!: number; 

  @Column()
  titulo!: string;

  @Column()
  descricao!: string;

  @Column({ default: false })
  concluida!: boolean;
}
