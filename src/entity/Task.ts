import {
  Entity,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectID,
} from "typeorm";

@Entity()
export class Task {
  @ObjectIdColumn()
  id!: ObjectID;

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
