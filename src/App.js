import styled from 'styled-components';

import List from './List';
import ListHeader from './ListHeader';
import Modal from './Modal';

const App = () => {
  return (
    <>
      <Wrapper>
        <ListHeader />
        <List />
      </Wrapper>
      <Modal />
    </>
  );
};

const Wrapper = styled.main`
  background-color: var(--bg-2);
  box-shadow: var(--shadow);
  padding: 1rem;
  width: 50vw;
  transition: 0.5s all;
  border-radius: 0.5rem;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export default App;
