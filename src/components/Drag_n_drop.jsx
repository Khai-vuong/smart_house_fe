import { DndContext } from "@dnd-kit/core";
import { useRef } from "react";
import useStore from "../utils/useStore";
import Draggable from "../utils/Dragable";

export default function Drag_n_drop() {
  const { updateElement, items } = useStore();
  const containerRef = useRef(null); // Reference to the container

  const handleDragEnd = (event) => {
    const { id } = event.active;
    const { x: deltaX, y: deltaY } = event.delta; // Fix: Correct delta extraction

    // Find the dragged item
    const draggedItem = items.find((el) => el.id === id);
    if (!draggedItem) return;

    // Compute new position
    const newX = draggedItem.x + deltaX;
    const newY = draggedItem.y + deltaY;

    // Update position in Zustand
    updateElement(id, newX, newY);
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full border-2 border-black relative overflow-hidden"
    >
      <DndContext onDragEnd={handleDragEnd}>
        {items.map((item) => (
          <Draggable key={item.id} id={item.id} />
        ))}
      </DndContext>
    </div>
  );
}
