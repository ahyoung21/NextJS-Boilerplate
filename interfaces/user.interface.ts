export interface UserInputInterface<Type> {
  name?: string;
  email: Type;
  password: string;
  matchPassword?: string;
}

export interface UserErrorMsgInterface {
  regMessage: string;
  pwdMessage: string;
  common: string;
}

export interface AccountInterface {
  dateTime: string;
  price: number;
  seq: number;
  type: string;
  id?: string;
}
