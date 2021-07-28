import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from './context';
import { BinIcon, EditIcon } from './icons';

const ListItem = ({ id, title, st }) => {
  const { removeTodo, editTodo, openModal, handleCheckTodo } =
    useGlobalContext();

  return (
    <Wrapper>
      <p onClick={() => openModal(id)}>{title}</p>

      <div>
        <button
          className={`todo-check todo-${st}`}
          onClick={() => handleCheckTodo(id)}
        ></button>

        <button onClick={() => editTodo(id)}>
          <EditIcon />
        </button>

        <button onClick={() => removeTodo(id)}>
          <BinIcon />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;

  button:not(:last-child) {
    margin-right: 0.5rem;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .todo-check {
    width: 1em;
    height: 1em;
    border-radius: 5rem;
  }
  .todo-0 {
    background: red;
  }
  .todo-1 {
    background: yellow;
  }
  .todo-2 {
    background: green;
  }

  > div {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    background: rgba(0, 0, 0, 0.5);
    padding: 0.4rem;
    border-radius: 0.5rem;
  }
`;

export default ListItem;
