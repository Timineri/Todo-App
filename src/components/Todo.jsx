import styled from "styled-components";
import Stats from "./Stats";

const Items = [
  { id: 1, description: "Complete online Javascript course", checked: false },
  { id: 2, description: "Jog around the park 3x", checked: true },
  { id: 3, description: "10 minutes meditation", checked: false },
  { id: 4, description: "Read for 1 hour", checked: false },
  { id: 5, description: "Pick up groceries", checked: false },
  {
    id: 6,
    description: "Complete Todo App on Frontend Mentoe",
    checked: false,
  },
];
export default function Todo() {
  return (
    <TodoParentContainer>
      <TodoContainer>
        <TodoListContainer>
          {Items.map((Item) => (
            <TodoItems Item={Item} key={Item.id} />
          ))}
          <Stats />
        </TodoListContainer>
        <Paragraph>Drag and drop to reorder list</Paragraph>
      </TodoContainer>
    </TodoParentContainer>
  );
}

function TodoItems({ Item }) {
  return (
    <TodoList>
      <InputCheckbox type="checkbox" />
      {Item.description}
    </TodoList>
  );
}

const TodoParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoContainer = styled.div`
  width: 70%;
`;

const TodoListContainer = styled.div`
  background-color: hsl(235, 24%, 19%);
  border-radius: 0.3em;
  list-style-type: none;
  line-height: 3em;
  color: hsl(234, 39%, 85%);
  cursor: pointer;
`;

const TodoList = styled.li`
  border-bottom: 1px solid hsl(237, 14%, 26%);
  padding: 0.3em 1em;
`;

const InputCheckbox = styled.input`
  margin-right: 10px;
`;

const Paragraph = styled.p`
  text-align: center;
  padding: 2em;
`;
