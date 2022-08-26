export class controller {
  constructor(service) {
    this.service = service;
  }

  async createController(req, res) {
    try {
      const newParams = req.body;
      const response = await this.service.create(newParams);
      res.status(201).send(response);
    } catch (err) {
      res.status(400).send(err.message)
    }
  }

  async updateController(req, res) {
    try {
      const id = req.params.id;
      const newParams = req.body;
      const response = await this.service.update(newParams, id);
      res.status(200).send(response);
    } catch (err) {
      res.status(400).send(err.message)
    }
  }

  async findAllController(_, res) {
    try {
      const response = await this.service.findAll();
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
      res.status(500);
    }
  }

  async findByIdController(req, res) {
    try {
      const id = req.params.id;
      const response = await this.service.findById(id);
      res.status(200).send(response);
    } catch (err) {
      res.status(400).send(err.message)
    }
  }

  async deleteController(req, res) {
    try {
      const id = req.params.id;
      const response = await this.service.delete(id);
      res.status(200).send(response);
    } catch (err) {
      res.status(400).send(err.message)
    }
  }
}
