import { useDraggable } from "@dnd-kit/core";
import useStore from "../utils/useStore";

const Draggable = ({ id }) => {
  const { items, selectElement } = useStore();
  const { x, y } = items.find((el) => el.id === id) || { x: 0, y: 0 };

  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style = {
    position: "absolute",
    left: `${x}px`,
    top: `${y}px`,
    width: "100px",
    height: "100px",
    backgroundColor: "lightblue",
    cursor: "grab",
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : "none", // Fix: Keeps final position after dropping
  };

  function clickHandler() {
    alert("Element clicked");
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
      {id}
    </div>
  );
};

export default Draggable;
