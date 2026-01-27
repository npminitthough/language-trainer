import bcrypt from 'bcrypt';

// how much time needed to calculate a single bcrypt hash
// longer time means more secure hash
// the salt is a randon value and should differ for each caluclation
// the salt is stored along with the hash
const SALT_ROUNDS = 10;

export async function hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, SALT_ROUNDS);
}

export async function comparePasword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
}