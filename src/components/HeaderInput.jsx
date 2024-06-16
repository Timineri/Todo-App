import styled from "styled-components";

export default function HeaderInput() {
  return (
    <InputParent>
      <Input type="text" name="" id="" />
    </InputParent>
  );
}
const InputParent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  background-color: hsl(235, 24%, 19%);
  border: none;
  border-radius: 0.3em;
  padding: 1em;
  margin-bottom: 2em;
  width: 65%;
`;
