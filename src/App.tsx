import React from "react";
import {
  AppContainer,
  CardContainer,
  ColumnContainer,
  ColumnTitle,
} from "./styles";

import { Column } from "./Column";
import AddNewItem from "./AddNewItem";
import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/actions";

export function App() {
  const { lists, dispatch } = useAppState();
  return (
    <AppContainer>
      {lists.map((list) => (
        <Column text={list.text} id={list.id} key={list.id} />
      ))}
      <AddNewItem
        toggleButton="+ Add another list"
        onAdd={(text) => {
          console.log(text);
          dispatch(addList(text));
        }}
      />
    </AppContainer>
  );
}
