// import Loader from "../utils/loader";
import { DndContext } from "@dnd-kit/core";
import { useRef } from "react";
import useStore from "../utils/useStoreNew";
import Draggable from "../utils/DragableNew";
import { getMockApi } from "../utils/mock.js"; //Fix this
import template from "../utils/dragable_template.js";
import ItemPanel from "./ItemPanel";

export default function Drag_n_drop() {
  const { updateElement, items } = useStore();
  const containerRef = useRef(null);

  const handleDragEnd = (event) => {
    const { id } = event.active;
    const { x: deltaX, y: deltaY } = event.delta;

    const draggedItem = items.find((item) => item.id === id);
    if (!draggedItem) return;

    const newX = draggedItem.x + deltaX;
    const newY = draggedItem.y + deltaY;

    updateElement(id, newX, newY);
  };

  return (
    <div className="flex w-full h-full">
      <div
        ref={containerRef}
        className="w-3/4 h-full border-2 border-black relative overflow-hidden"
      >
        <DndContext onDragEnd={handleDragEnd}>
          {items.map((item) => (
            <Draggable key={item.id} id={item.id} item={item} />
          ))}
        </DndContext>
      </div>

      <div className="w-1/4 p-4 border-l-2">
        <ItemPanel />
      </div>
    </div>
  );
}
