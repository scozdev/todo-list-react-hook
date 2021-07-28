import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'

const List = ({ todos }) => {
  if (todos.length === 0) {
    return <Loading>Loading...</Loading>
  }

  return (
    <Todos>
      {todos.map((todo) => (
        <ListItem {...todo} />
      ))}
    </Todos>
  )
}

const Todos = styled.ul`
  list-style: none;
`

const Loading = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`

export default List
