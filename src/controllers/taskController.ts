import { Request, Response } from "express";
import { customerSchema } from "../validators/customerValidator";

export class TaskController {
  async createTask(req: Request, res: Response) {
    try {
      const parseData = customerSchema.parse(req.body);
      console.log('Dados validados:', parseData);
    } catch (error) {
      console.error('Erro de validação');
      res.status(400).json(error);
    }
  }

  async getAllTasks(req: Request, res: Response) {
    //lógica para listar todas as tasks
  }

  async getTaskById(req: Request, res: Response) {
    //lógica para listar as tasks especificas
  }

  async updateTask(req: Request, res: Response) {
    //lógica para atualizar a task
  }

  async deleteTask(req: Request, res: Response) {
    //lógica para deletar a task
  }
}