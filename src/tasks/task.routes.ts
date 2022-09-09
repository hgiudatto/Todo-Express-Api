import { Router } from "express";
import { TaskController } from "./task.controller";
import { TaskRepository } from "./task.repository";
const router = Router();

const controller = new TaskController(new TaskRepository());

router.post("/tasks", controller.create.bind(controller));
router.get("/tasks", controller.list);
router.get("/tasks/:taskId", controller.get);
router.put("/tasks/:taskId", controller.update);
router.delete("/tasks/:taskId", controller.remove);

export default router;
