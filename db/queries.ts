import { db } from './';
import { InsertUser, usersTable } from './schema';

export async function createUser(data: InsertUser) {

  const response = await db.insert(usersTable).values(data);
  console.log("RESPONSE!!!!!", response)
}