import { AppDataSource } from "../data-source";
import { Task } from "../models/taskModel";

export const taskRepository = AppDataSource.getRepository(Task);
