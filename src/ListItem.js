import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from './context'
import { BinIcon, EditIcon } from './icons'

const ListItem = ({ id, title }) => {
  const { removeTodo, editTodo } = useGlobalContext()

  return (
    <Wrapper key={id}>
      {title}

      <div>
        <button onClick={() => editTodo(id)}>
          <EditIcon />
        </button>

        <button onClick={() => removeTodo(id)}>
          <BinIcon />
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  button:not(:last-child) {
    margin-right: 0.5rem;
  }
`

export default ListItem
