import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from './context'
import List from './List'
import ListHeader from './ListHeader'

const App = () => {
  const { todos } = useGlobalContext()

  return (
    <Wrapper>
      <ListHeader />
      <List todos={todos} />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background-color: var(--bg-2);
  box-shadow: var(--shadow);
  padding: 1rem;
`

export default App
