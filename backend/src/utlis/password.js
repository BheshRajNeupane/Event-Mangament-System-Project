import crypto from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(crypto.scrypt);
const randomBytesAsync = promisify(crypto.randomBytes);


//const scryptAsync = promisify(scrypt);

export  class Password {

   async toHash(password) {

    // const salt = randomBytesAsync(8).toString("hex");
    const salt = (await randomBytesAsync(16)).toString("hex");
    const buf = await scryptAsync(password, salt, 64);
    return `${buf.toString("hex")}.${salt}`;
  }

   async compare(storedPassword, suppliedPassword) {
     
    const [hashedPassword, salt] = storedPassword.split(".");
    const buf = await scryptAsync(suppliedPassword, salt, 64);

    return buf.toString("hex") === hashedPassword;
  }
}


  

