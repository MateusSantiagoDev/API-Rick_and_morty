export class service {
  constructor(
    createUseCase,
    deleteUseCase,
    findAllUseCase,
    findByIdUseCase,
    updateUseCase
  ) {
    this.createUseCase = createUseCase;
    this.deleteUseCase = deleteUseCase;
    this.findAllUseCase = findAllUseCase;
    this.findByIdUseCase = findByIdUseCase;
    this.updateUseCase = updateUseCase;
  }

  async create(data) {
    return await this.createUseCase.execute(data);
  }

  async delete(id) {
    return await this.deleteUseCase.execute(id);
  }

  async findAll() {
    return await this.findAllUseCase.execute();
  }

  async findById(id) {
    return await this.findByIdUseCase.execute(id);
  }
  async update(data, id) {
    return await this.updateUseCase.execute(data, id);
  }
}
