import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from './context';
import ListItem from './ListItem';

const List = () => {
  const { todos, search } = useGlobalContext();
  if (todos.length === 0) {
    return <Loading>Loading...</Loading>;
  }
  console.log(todos);
  return (
    <Todos>
      {todos
        .filter((todo) => todo.title.indexOf(search) > -1)
        .map((todo) => (
          <ListItem key={todo.id} {...todo} />
        ))}
    </Todos>
  );
};

const Todos = styled.ul`
  list-style: none;

  > li {
    background: var(--bg-5);
  }
  > li:nth-child(4n + 1) {
    background: var(--bg-6);
  }
  > li:nth-child(4n + 2) {
    background: var(--bg-7);
  }
  > li:nth-child(4n + 3) {
    background: var(--bg-4);
  }
`;

const Loading = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`;

export default List;
