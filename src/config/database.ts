import { DataSource } from "typeorm";

import { Task } from "../entity/Task";

export default new DataSource({
  type: "mongodb",
  host: "localhost",
  port: 27017,
  username: "root",
  password: "",
  database: "todo",
  entities: [Task],
  synchronize: true,
  logging: ["query", "error"],
});
