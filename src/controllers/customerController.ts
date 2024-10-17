import { Request, Response } from "express";
import { customerSchema } from "../validators/customerValidator";
import { Customer } from "../models/customerModel";
import { AppDataSource } from "../data-source";



export class CustomerController {
  async createCustomer(req: Request, res: Response) {
    try {
      const parsedata = customerSchema.parse(req.body);
      res.json(parsedata);
    } catch (error) {
       console.error("Erro de validação:");
       res.status(400).json({ error })
    }
  }

  async getAllCustomer(req: Request, res: Response) {
    try {
      const customerRepository = AppDataSource.getRepository(Customer);
      const customers = await customerRepository.find();
      res.json(customers)
    } catch (error) {
      console.error("Erro ao buscar clientes:", error)
      res.status(500).json({ error: "Erro ao buscar clientes" });
    }
  }

  async getCustomerById(req: Request, res: Response) {
    // Lógica para retornar um cliente específico
  }

  async updateCustomer(req: Request, res: Response) {
    // Lógica para atualizar um cliente
  }

  async deleteCustomer(req: Request, res: Response) {
    // Lógica para deletar um cliente
  }
}