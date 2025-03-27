// import Loader from "../utils/loader";
import { DndContext } from "@dnd-kit/core";
import { useRef } from "react";
import { useEffect, useState } from "react";
import useStore from "../utils/useStoreNew";
import Draggable from "../utils/DragableNew";
import { current } from "@reduxjs/toolkit";

export default function Drag_n_drop() {
  const { updateElement, floors, currentFloor, loading, setLoaded } =
    useStore();
  const containerRef = useRef(null); // Reference to the container
  const [isDataLoaded, setIsDataLoaded] = useState(false); // Local loading state

  useEffect(() => {
    if (localStorage.getItem("floors")) {
      setIsDataLoaded(true);
    } else {
      const house = getMockApi();
      house.floors.forEach((floor) => {
        storage.addFloor(shapeTemplate.importFloor(floor));
      });
      setIsDataLoaded(true);
    }
  }, []);

  const handleDragEnd = (event) => {
    alert("Drag id: " + event.active.id + " in floor: " + currentFloor);

    const { id } = event.active;
    const { x: deltaX, y: deltaY } = event.delta; // Fix: Correct delta extraction

    // Find the dragged item
    const draggedItem = floors[currentFloor].find((el) => el.id === id);
    if (!draggedItem) return;

    // Compute new position
    const newX = draggedItem.x + deltaX;
    const newY = draggedItem.y + deltaY;

    // Update position in Zustand
    updateElement(id, newX, newY);
  };

  if (!isDataLoaded) return <div>Loading...</div>;

  return (
    <div
      ref={containerRef}
      className="w-full h-full border-2 border-black relative overflow-hidden"
    >
      {/* <Loader></Loader> */}
      <DndContext onDragEnd={handleDragEnd}>
        {floors[currentFloor].map((item) => (
          <Draggable key={item.id} id={item.id} item={item} />
        ))}
      </DndContext>
    </div>
  );
}
