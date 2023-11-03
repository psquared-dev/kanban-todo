import React, { useState } from "react";
import { AddItemButton, NewItemFormContainer } from "./styles";
import NewItemForm from "./NewItemForm";

type AddNewItemProps = {
  onAdd(text: string): void;
  toggleButton: string;
  dark?: boolean;
};

const AddNewItem = ({ onAdd, toggleButton, dark }: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButton}
    </AddItemButton>
  );
};

export default AddNewItem;
