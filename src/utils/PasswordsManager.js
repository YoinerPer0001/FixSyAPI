import bcrypt from "bcrypt"
import 'dotenv/config'

export const hashPassword = async (password) => {
    const rounds = parseInt(process.env.SALTROUNDS) || 10;
    const hashed_pass = await bcrypt.hash(password, rounds);
    return hashed_pass;
}

export const comparePassword = async (storedHash, passwordToCheck) => {
    const isMatch = await bcrypt.compare(passwordToCheck, storedHash);
    return isMatch;
}