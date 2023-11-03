import React, { createContext, useContext, Dispatch } from "react";
import { AppState, List, Task, appStateReducer } from "./appStateReducer";
import { Action } from "./actions";
import { useImmerReducer } from "use-immer";
import { DragItem } from "../DragItem";

type ChildrenProps = {
  children?: React.ReactNode;
};

type AppStateContextProps = {
  lists: List[];
  getTasksByListId(id: string): Task[];
  //   children?: React.ReactNode;
  dispatch: Dispatch<Action>;
  draggedItem: DragItem | null;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

const appData: AppState = {
  draggedItem: null,
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
};

export const AppStateProvider = (props: ChildrenProps) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { lists, draggedItem } = state;

  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider
      value={{ lists, getTasksByListId, dispatch, draggedItem }}
    >
      {props.children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
