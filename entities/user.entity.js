import { randomUUID } from "crypto";
import { characterEntity } from "../entities/character.entity.js";
import { bcryptHelp } from "../auth/bcrypt.js";

export class userEntity {
  constructor(user) {
    this.id = user.id ?? randomUUID();
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.image = user.image;
    this.characters = user.characters ?? [];
  }

  validate() {
    if (!this.name || !this.email || !this.password || !this.image) {
      throw new Error("not foud");
    }
  }

  characterAdd(character) {
    const addCharacter = new characterEntity(character, this.id);
    this.characters.push(addCharacter.getCharacter());
  }

  getUser() {
    const bcrypt = new bcryptHelp();
    const hash = bcrypt.hashGenerator(this.password);

    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: hash,
      image: this.image,
      characters: this.characters,
    };
  }
}
