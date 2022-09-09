import {
  Entity,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Task {
  @ObjectIdColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column("boolean", { default: false })
  isCompleted!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
