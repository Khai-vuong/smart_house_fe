import { useDraggable } from "@dnd-kit/core";
import useStore from "../utils/useStore";
import { useState, useEffect } from "react";

const Draggable = ({ id, item }) => {
  const { selectElement, selectedElement } = useStore();
  const { x, y, z, width, height, color, label } = item;

  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style = {
    position: "absolute",
    left: `${x}px`,
    top: `${y}px`,
    width: `${width}px`,
    height: `${height}px`,
    zIndex: z,
    backgroundColor: `#${color}`,
    cursor: "grab",
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : "none", // Fix: Keeps final position after dropping
  };

  function clickHandler() {
    selectElement(id);
    alert("selected id: " + id + "\n " + JSON.stringify(selectedElement));
  }

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      onPointerUp={clickHandler}
    >
      {label}
    </div>
  );
};

export default Draggable;
