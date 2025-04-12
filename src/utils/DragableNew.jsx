import { useDraggable } from "@dnd-kit/core";
import useStore from "./useStore";

const Draggable = ({ id, item }) => {
  const { selectElement } = useStore();
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
      : "none",
    border: "1px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
  };

  function handleClick(e) {
    e.stopPropagation();
    selectElement(id);
  }

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      onClick={handleClick}
    >
      {label}
    </div>
  );
};

export default Draggable;
