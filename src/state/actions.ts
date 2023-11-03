import { DragItem } from "../DragItem";

export type Action =
  | { type: "ADD_LIST"; payload: string }
  | { type: "ADD_TASK"; payload: { text: string; listId: string } }
  | { type: "MOVE_LIST"; payload: { draggedId: string; hoverId: string } }
  | {
      type: "SET_DRAGGED_ITEM";
      payload: DragItem | null;
    };

export const addTask = (text: string, listId: string): Action => {
  return {
    type: "ADD_TASK",
    payload: {
      listId: listId,
      text: text,
    },
  };
};

export const addList = (text: string): Action => {
  return {
    type: "ADD_LIST",
    payload: text,
  };
};

export const moveList = (draggedId: string, hoverId: string): Action => ({
  type: "MOVE_LIST",
  payload: {
    draggedId,
    hoverId,
  },
});

export const setDraggedItem = (draggedItem: DragItem | null): Action => ({
  type: "SET_DRAGGED_ITEM",
  payload: draggedItem,
});
