import { useDraggable } from "@dnd-kit/core";
import useStore from "../utils/useStore";

const Draggable = ({ id }) => {
  const { items, selectElement } = useStore();

  const item = useStore((state) => state.items.find((el) => el.id === id));

  // const { floors, selectElement, currentFloor } = useStore();

  // const item = floors[currentFloor].find((el) => el.id === id);

  // console.log("Floors: ", JSON.stringify(floors));
  // console.log("Current floor: ", currentFloor);
  // console.log("Selected element: ", JSON.stringify(selectElement));
  // console.log("item", JSON.stringify(item));
  const { x, y, z, width, height, color, label } = item;

  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style = {
    position: "absolute",
    left: `${x}px`,
    top: `${y}px`,
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: `#${color}`,
    cursor: "grab",
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : "none", // Fix: Keeps final position after dropping
  };

  function clickHandler() {
    selectElement(id);
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
