import { IUser } from '../user/user.interface'

export type IUserLogin = {
  email: string
  password: string
}

export type IUserSignupResponse = {
  result: IUser
  accessToken?: string
  refreshToken?: string
}

export type IUserLoginResponse = {
  userData: IUser | null
  accessToken: string | null
  refreshToken?: string | null
}

export type IRefreshTokenResponse = {
  accessToken: string
}
