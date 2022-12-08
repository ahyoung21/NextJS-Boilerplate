import { atom, RecoilRoot, useRecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import UserState from './UserStateIndex';
import InitialPropsState from './InitialProps';

//1. 아무것도 설정 안 하고 쓰는 경우
//localStorage에 저장되며, key 이름은 'recoil-persist'로 저장됨
// const { persistAtom } = recoilPersist()

//2. sessionStorage에 저장하고 싶은 경우
//Next.js를 쓴다면 sessionStorage는 아래와 같이 따로 설정 필요
// const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

// const { persistAtom } = recoilPersist({
//   key: 'recoil-persist',
//   storage: sessionStorage,
// });

export { UserState, InitialPropsState };
