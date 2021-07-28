import React from 'react';
import styled from 'styled-components';

import { useGlobalContext } from './context';
import { PlusIcon } from './icons';

const ListHeader = () => {
  const { addTodo, todo, setTodo, setSearch, search } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(todo);
    setTodo('');
  };

  return (
    <Header>
      <h1>Todos</h1>

      <form onSubmit={handleSubmit}>
        <input
          className='input'
          type='text'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button className='btn'>
          <PlusIcon />
        </button>
      </form>

      <div className='search'>
        <p>Search</p>
        <input
          className='input'
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </Header>
  );
};

const Header = styled.header`
  padding: 1rem 0;

  h1 {
    font-size: 2.4rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    justify-content: center;
    margin-bottom: 0.4rem;
  }
  .input {
    border-radius: 0.4rem;
    border: 1px solid #5d0cff;
    padding: 0.4rem;
    flex: 1 0 auto;
  }

  .btn {
    border: 0;
    background: var(--bg-6);
    padding: 0.5rem;
    border-top-right-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
    margin-left: -0.5rem;
    cursor: pointer;
  }
  
  .search{
    p {
      margin-bottom: .2rem;
    }
  }
`;

export default ListHeader;
