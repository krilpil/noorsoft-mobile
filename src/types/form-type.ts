export type UserLoginData = {
  email: string;
  password: string;
};

export interface UserSignupData extends UserLoginData {
  name: string;
  surname: string;
}
