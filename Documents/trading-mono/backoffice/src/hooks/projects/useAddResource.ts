import { useState } from "react";

export const useAddResource = () => {
  const emptyElement: string = "";

  const [elements, setElements] = useState<string[]>([emptyElement]);

  const addElement = () => {
    setElements((prev) => [...prev, emptyElement]);
  };

  const removeElement = (elementId: string) => {
    setElements((prev) => prev.filter((element) => element !== elementId));
  };
  
  const editElement = (elementId: string) => {
    setElements((prev) => {
      return prev.map((element) => {
        if (element === elementId) {
          return  elementId;
        }
        return element;
      });
    });
  };
  

  return {
    elements,
    removeElement,
    addElement,
    editElement,
  };
};
