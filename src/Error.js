import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";

const Error = () => {
  const { error, removeAlert, todos } = useGlobalContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [removeAlert, todos]);

  return <Wrapper error={error.sh}>{error.msg}</Wrapper>;
};

const Wrapper = styled.div`
  display: ${(props) => (props.error ? "block" : "none")};
  color: red;
  font-size: 1.2rem;
  text-align: center;
`;

export default Error;
