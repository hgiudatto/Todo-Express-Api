import { Request, Response, NextFunction } from "express";
import { DatabaseRepository } from "../declarations";
import { Task } from "../entity/Task";

export class TaskController {
  constructor(private repository: DatabaseRepository<Task>) {}

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(200).json({
      message: "List task",
    });
  }
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    const body = req.body;

    // TODO: Error Handling
    const task = await this.repository.create(body);

    console.log(`Body: `, body);

    res.status(200).json(task);
  }
  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(200).json({
      message: "Get task",
    });
  }
  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(200).json({
      message: "Update task",
    });
  }
  async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(200).json({
      message: "Remove task",
    });
  }
}
