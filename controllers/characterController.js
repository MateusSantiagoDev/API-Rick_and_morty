import { controller } from "./controller.js";

export class characterController extends controller {
  constructor(service, findByNameCharacterUsecase) {
    super(service);
    this.findByName = findByNameCharacterUsecase;
  }

  async finByNameCharacter(req, res) {
    try {
      const response = await this.findByName.execute(req.body.name);
      res.status(200).send(response);
    } catch (err) {
      res.status(400).send(err.message)
    }
  }
}
