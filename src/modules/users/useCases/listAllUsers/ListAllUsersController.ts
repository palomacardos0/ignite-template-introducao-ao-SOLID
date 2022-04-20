/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const all = this.listAllUsersUseCase.execute({
        user_id: String(request.headers.user_id),
      });
      return response.json(all)
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListAllUsersController };
