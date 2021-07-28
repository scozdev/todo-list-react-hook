import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from './context'
import { BinIcon, EditIcon } from './icons'

const List = ({ todos }) => {
  const { removeTodo, editTodo } = useGlobalContext()

  if (todos.length === 0) {
    return <Loading>Loading...</Loading>
  }

  return (
    <Todos>
      {todos.map((todo) => {
        const { id, title } = todo
        return (
          <li key={id}>
            {title}

            <div>
              <button onClick={() => editTodo(id)}>
                <EditIcon />
              </button>

              <button onClick={() => removeTodo(id)}>
                <BinIcon />
              </button>
            </div>
          </li>
        )
      })}
    </Todos>
  )
}

const Todos = styled.ul`
  list-style: none;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    button:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
`

const Loading = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`

export default List
