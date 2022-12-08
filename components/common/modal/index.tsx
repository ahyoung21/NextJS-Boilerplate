import ReactDOM from 'react-dom';
import { PropsWithChildren, useEffect, useState } from 'react';
import { ModalBox, Dimmed, ModalContent } from './style';

interface ModalProps {
  onClose: () => void;
}

const ModalDimed = (props: ModalProps) => {
  return <Dimmed onClick={props.onClose} />;
};

const ModalContents = ({ children }: PropsWithChildren) => {
  return <ModalContent>{children}</ModalContent>;
};

const Modal = (props: PropsWithChildren<ModalProps>) => {
  const [modalElement, setModalElement] = useState<Element | null>(null);

  useEffect(() => {
    if (document) {
      setModalElement(document.getElementById('modal'));
    }
  }, []);

  if (modalElement === null) {
    return <div></div>;
  } else {
    return (
      <>
        {ReactDOM.createPortal(
          <>
            <ModalBox>
              <ModalContents>{props.children}</ModalContents>
              <ModalDimed onClose={props.onClose}></ModalDimed>
            </ModalBox>
          </>,
          modalElement
        )}
      </>
    );
  }
};
export default Modal;
