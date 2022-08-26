import { characterDatabase } from "../../mongo/schemas/character.schema.js";

export class characterRepository {
  async findAll() {
    return await characterDatabase.find();
  }

  async findById(id) {
    return await characterDatabase.findOne({ id: id });
  }

  async create(character) {
    return await characterDatabase.create(character);
  }

  async update(character) {
    return await characterDatabase.findOneAndUpdate(
      { id: character.id },
      character,
      { new: true }
    );
  }

  async findByName(character) {
    return await characterDatabase.find({ name: character });
  }

  async delete(id) {
    return await characterDatabase.findOneAndDelete(id);
  }
}
