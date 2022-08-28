import * as bcrypt from "bcrypt";

export class bcryptHelp {
      hashGenerator(password) {
    const hash = bcrypt.hashSync(password, 5, (err, hash) => {
      if (err) {        
        throw new Error("Error in hash:", err);
      }

      return hash;
    });

    return hash;
  }

  comparePasword(password, hash) {
    return bcrypt.compareSync(password, hash);
  }
}