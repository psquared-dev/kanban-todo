import { useRef } from "react";
import AddNewItem from "./AddNewItem";
import Card from "./Card";
import { useAppState } from "./state/AppStateContext";
import { addTask } from "./state/actions";
import { ColumnContainer, ColumnTitle, CardContainer } from "./styles";
import { useItemDrag } from "./utils/useItemDrag";

type ColumnProps = {
  text: string;
  id: string;
};

export const Column = ({ text, id }: ColumnProps) => {
  const { draggedItem, getTasksByListId, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);

  const tasks = getTasksByListId(id);
  const { drag } = useItemDrag({ type: "COLUMN", id, text });

  return (
    <ColumnContainer ref={ref}>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} />
      ))}
      <AddNewItem
        toggleButton="+ Add another card"
        onAdd={(text) => dispatch(addTask(text, id))}
        dark
      />
    </ColumnContainer>
  );
};
