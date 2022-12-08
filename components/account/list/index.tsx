import React, { useState, MouseEvent } from 'react';
import { deleteData } from '../../../firebase/firestore';
import { AccountInterface } from '../../../interfaces/user.interface';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { UserState, InitialPropsState } from '../../../state';
import ModalRegister from '../../modalRegister';

import { AccountListBox } from './style';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function AccountList() {
  const [modalFlag, setModalFlag] = useState(false);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const intl = new Intl.NumberFormat('ko', { style: 'currency', currency: 'KRW' });
  const [accountData, setAccountData] = useState();
  const onClickOpenModal = () => {
    setModalFlag(true);
  };
  const onClickCloseModal = () => {
    setAccountData(null);
    setModalFlag(false);
  };

  const onMouseDown = (e: MouseEvent<HTMLElement>): void => {
    setStart(e.pageX);
  };

  const onMouseUp = (e: MouseEvent<HTMLElement>): void => {
    setEnd(e.pageX);
    if (start > end) {
      e.currentTarget.classList.add('active');
    } else {
      e.currentTarget.classList.remove('active');
    }
  };

  const onClickDelete = async (id: string) => {
    const confirm = window.confirm('정말 삭제하시겠습니까?');

    if (confirm) {
      await deleteData('account', id)
        .then(() => {
          console.log('Entire Document has been deleted successfully.');
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const onClickUpdate = async (id: string) => {
    onClickOpenModal();

    setAccountData(accountInfo.contents.filter((item: any) => item.id === id));
  };

  const userEmail = useRecoilValue(UserState);
  const accountInfo = useRecoilValueLoadable(InitialPropsState);

  switch (accountInfo.state) {
    case 'hasValue':
      return (
        <AccountListBox>
          <button onClick={onClickOpenModal}>모달오픈</button>
          {modalFlag && <ModalRegister onClose={onClickCloseModal} accountData={accountData} />}
        </AccountListBox>
      );
    case 'loading':
      return (
        <div>
          <Skeleton count={5} height={'1.8rem'} />
        </div>
      );
    case 'hasError':
      return <>error</>;
  }
}
