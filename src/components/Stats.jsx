import styled from "styled-components";

export default function Stats() {
  return (
    <StatesContainer>
      <span>X items left</span>
      <States>
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
      </States>
      <span>Clear Completed</span>
    </StatesContainer>
  );
}

const StatesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0em 1.5em;
  color: hsl(237, 14%, 26%);
  &:hover {
    color: hsl(236, 33%, 92%);
  }
`;

const States = styled.div`
  display: flex;
  gap: 1em;
  color: hsl(237, 14%, 26%);

  &:hover {
    color: hsl(236, 33%, 92%);
  }
`;
