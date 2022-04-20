/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {

      const user = this.showUserProfileUseCase.execute({ user_id: String(request.params.user_id) })

      return response.status(201).json(user);
    } catch (err) {
      return response.status(404).json({ error: err.message });

    }


  }
}

export { ShowUserProfileController };
