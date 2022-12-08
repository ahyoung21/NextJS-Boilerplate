import React, { useState, useEffect, useRef, ChangeEvent, MouseEvent } from 'react';
import { setData, updateData } from '../../firebase/firestore';
import Modal from '../common/modal';
import { ModalRegisterBox } from './style';

interface ModalProps {
  onClose: () => void;
  accountData: [
    {
      dateTime: string;
      id: string;
      price: string;
      seq: string;
      type: string;
    }
  ];
}

interface IRegister {
  date: string;
  price: string;
  select: string;
  name: string;
}

const ModalRegister = (props: ModalProps) => {
  const dateRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [status, setStatus] = useState<boolean>(false);

  const [inputValue, setInputValue] = useState<IRegister>({
    date: '',
    price: '',
    select: 'deposit',
    name: '',
  });

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleCheckDate();

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSelectValue = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const checkValidDate = (value: string): boolean => {
    let result = true;
    try {
      const date = value.split('-');
      const y = parseInt(date[0], 10),
        m = parseInt(date[1], 10),
        d = parseInt(date[2], 10);

      const dateRegex =
        /^(?=\d)(?:(?:31(?!.(?:0?[2469]|11))|(?:30|29)(?!.0?2)|29(?=.0?2.(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(?:\x20|$))|(?:2[0-8]|1\d|0?[1-9]))([-.\/])(?:1[012]|0?[1-9])\1(?:1[6-9]|[2-9]\d)?\d\d(?:(?=\x20\d)\x20|$))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/;
      result = dateRegex.test(d + '-' + m + '-' + y);
    } catch (err) {
      result = false;
    }
    return result;
  };

  const handleCheckDate = () => {
    if (checkValidDate(inputValue.date)) {
      setErrorMsg('');
    } else {
      setErrorMsg('YYYY-MM-DD 형식으로 입력해주세요.');
    }
  };

  const onSubmit = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    const data = {
      dateTime: inputValue.date,
      price: Number(inputValue.price),
      seq: inputValue.name,
      type: inputValue.select,
    };
    if (props.accountData) {
      updateData('account', props.accountData[0].id, data).then(() => {
        window.location.reload();
      });
    } else {
      setData('account', data).then(() => {
        setInputValue({
          date: '',
          price: '',
          select: 'deposit',
          name: '',
        });
        props.onClose();
        window.location.reload();
      });
    }
  };

  useEffect(() => {
    if (inputValue.date && inputValue.price && inputValue.select && inputValue.name) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [inputValue]);

  useEffect(() => {
    if (props.accountData) {
      setInputValue({
        date: props.accountData[0].dateTime,
        price: props.accountData[0].price,
        select: props.accountData[0].type,
        name: props.accountData[0].seq,
      });
    }
  }, [props]);

  return (
    <Modal onClose={props.onClose}>
      <ModalRegisterBox>
        <form>
          <h2>입출금 내역 입력</h2>
          <div>
            <select name="select" id="selectBox" onChange={handleSelectValue}>
              <option value="deposit">입금</option>
              <option value="withdraw">출금</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="YYYY-MM-DD 형식으로 입력해주세요."
            name="date"
            ref={dateRef}
            value={inputValue.date}
            onChange={handleInputValue}
          />
          <p>{errorMsg}</p>
          <input
            type="number"
            placeholder="금액을 입력해주세요."
            name="price"
            ref={priceRef}
            value={inputValue.price}
            onChange={handleInputValue}
          />
          <input
            type="text"
            placeholder="이름을 입력해주세요."
            name="name"
            ref={nameRef}
            value={inputValue.name}
            onChange={handleInputValue}
          />
          <button type={'button'} onClick={status ? onSubmit : undefined}>
            {props.accountData ? '수정' : '등록'}
          </button>
        </form>
      </ModalRegisterBox>
    </Modal>
  );
};

export default ModalRegister;
