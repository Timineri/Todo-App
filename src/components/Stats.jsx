import styled from "styled-components";

export default function Stats() {
  return (
    <StatesContainer>
      <Paragraph>X items left</Paragraph>

      <States>
        <Paragraph>All</Paragraph>
        <Paragraph>Active</Paragraph>
        <Paragraph>Completed</Paragraph>
      </States>

      <Paragraph>Clear Completed</Paragraph>
    </StatesContainer>
  );
}

const StatesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0em 1.5em;
`;

const States = styled.div`
  display: flex;
  gap: 1em;
`;

const Paragraph = styled.p`
  color: hsl(233, 14%, 35%);
  &:hover {
    color: hsl(236, 33%, 92%);
  }
`;
