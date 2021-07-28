import React from 'react'
import styled from 'styled-components'

import { useGlobalContext } from './context'
import { PlusIcon } from './icons'

const ListHeader = () => {
  const { addTodo, todo, setTodo } = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()

    addTodo(todo)
    setTodo('')
  }

  return (
    <Header>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className='header-input'
          type='text'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className='btn'>
          <PlusIcon />
        </button>
      </form>
    </Header>
  )
}

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
  }
  .header-input {
    border-radius: 0.2rem;
    border: 1px solid #ccc;
    border-right: 0;
    padding: 0.4rem;
    flex: 1 0 auto;
  }

  .btn {
    border: 0;
    background-color: #ccc;
    padding: 0.4rem;
  }
`

export default ListHeader
