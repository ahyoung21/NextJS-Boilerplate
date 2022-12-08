import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export interface IUserTypes {
  name?: string;
  email: string | undefined;
  password?: string;
}

const initialState: IUserTypes[] = [];

//Recoil-persist를 적용시키려면 아래의 effects_UNSTABLE을 적어주어야 한다.
export default atom<IUserTypes[]>({
  key: 'userState',
  default: initialState,
  effects_UNSTABLE: [persistAtom],
});
