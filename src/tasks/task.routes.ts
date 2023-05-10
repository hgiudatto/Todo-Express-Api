import { Router } from "express";
import { TaskController } from "./task.controller";
import { TaskRepository } from "./task.repository";
const router = Router();

const controller = new TaskController(new TaskRepository());

router.post("/tasks", controller.create.bind(controller));
router.get("/tasks", controller.list.bind(controller));
router.get("/tasks/:taskId", controller.get.bind(controller));
router.put("/tasks/:taskId", controller.update.bind(controller));
router.delete("/tasks/:taskId", controller.remove.bind(controller));

export default router;
