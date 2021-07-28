import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from './context';

const Modal = () => {
  const { closeModal, selectItemId, todos, isOpenModal, setSelectItemId } =
    useGlobalContext();

  return (
    <Wrapper isOpen={isOpenModal}>
      <div className='modal'>
        <p>{todos && todos[selectItemId]?.title}w</p>

        <div className='btns'>
          <button className='btn-delete' onClick={() => closeModal()}>
            {'x'}
          </button>
          <button
            className='btn-left'
            onClick={() => setSelectItemId((prevId) => prevId - 1)}
          >
            {'<'}
          </button>
          <button
            className='btn-right'
            onClick={() => setSelectItemId((prevId) => prevId + 1)}
          >
            {'>'}
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 80%;
  left: 50%;
  transform: ${(props) =>
    props.isOpen ? 'translate(-50%, -50%)' : 'translate(-50%, 300%)'};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: 0.5s all;
  color: #000000;
  box-shadow: var(--shadow);
  text-align: center;

  .modal {
    width: 50vw;
    height: 20vh;
    background-color: #fff;
    border-radius: 0.5rem;
  }
  p {
    padding: 1.2rem;
    font-size: 1rem;
  }

  font-size: 2rem;
  font-weight: 700;

  .btn-left {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translate(-50%, -50%);
  }
  .btn-right {
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translate(-50%, -50%);
  }
  .btn-delete {
    position: absolute;
    top: 10%;
    right: 5%;
    transform: translate(-50%, -50%);
  }
`;

export default Modal;
