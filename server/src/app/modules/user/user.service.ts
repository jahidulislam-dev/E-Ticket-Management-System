/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser } from './user.interface'
import { User } from './user.model'
const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id)
  return result
}

export const UserService = {
  getSingleUser,
}
