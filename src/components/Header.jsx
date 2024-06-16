import styled from "styled-components";

import HeaderInput from "./HeaderInput";

export default function Header() {
  return (
    <>
      <TodoHeader>TODO</TodoHeader>
      {/* <img src="../icons/icon-sun.svg" alt="Hello" /> */}
      <HeaderInput />
    </>
  );
}

const TodoHeader = styled.h1`
  margin-top: 2em;
  margin-bottom: 1em;
  letter-spacing: 0.6em;
`;
