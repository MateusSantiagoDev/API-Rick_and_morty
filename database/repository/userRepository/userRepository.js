import { userDatabase } from "../../mongo/schemas/user.schema.js";

export class userRepository {
  async findAll() {
    return await userDatabase.find();
  };
  async findById(id) {
    return await userDatabase.findOne({ id: id });
  };
  async create(user) {
    return await userDatabase.create(user);
  };
  async update(user) {
    return await userDatabase.findOneAndUpdate({ id: user.id }, user, {
      new: true
    });
  };
  async delete(id) {
    return await userDatabase.findOneAndDelete(id);
  };
};
