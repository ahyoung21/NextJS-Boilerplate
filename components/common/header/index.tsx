import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { UserState } from '../../../state';
import { HeaderBox } from './style';

export default function Header() {
  const userEmail = useRecoilValue(UserState);

  return (
    <HeaderBox>
      <h1>
        <Link
          href={{
            pathname: '/',
          }}
        >
          <strong>💰 Group Account Book</strong>
        </Link>
      </h1>
      {userEmail ? (
        <Link
          href={{
            pathname: '/login',
          }}
        >
          LOGIN
        </Link>
      ) : (
        <Link
          href={{
            pathname: '/join',
          }}
        >
          JOIN
        </Link>
      )}
    </HeaderBox>
  );
}
