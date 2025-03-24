import NavBar from "../components/Navbar.jsx";
import Drag_n_drop from "../components/Drag_n_drop.jsx";

import { useState } from "react";
import useStore from "../utils/useStore.js";

function ControlPage() {
  // Ensure useStore is correctly used
  const shapes = useStore();
  const maxFloor = 2;

  const [rectangle_count, setRectangle_count] = useState(0);
  const [floor_count, setFloor_count] = useState(0);
  const [device_count, setDevice_count] = useState(0);
  const [sensor_count, setSensor_count] = useState(0);

  function addRectangle() {
    alert("Rectangle added");

    setRectangle_count(rectangle_count + 1);
    shapes.addElement({
      // Add to Zustand
      id: `rectangle-${rectangle_count}`,
      type: "rectangle",
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    });
  }

  return (
    <div className="flex flex-row gap-4 w-screen h-screen bg-blue-300">
      <NavBar selecting={1} className="left"></NavBar>

      <section className="mid flex flex-col gap-4 w-3/5 h-full flex-grow-0">
        <div className="w-full h-[60vh] flex-grow-0">
          <Drag_n_drop></Drag_n_drop>
        </div>

        <div
          id="control__panel"
          className="bg-purple-300 flex-grow-1 flex flex-row"
        >
          <div className="buttons flex flex-col gap-2 w-1/4 mt-4 ml-4">
            <button className="btn btn-warning">Add sensor</button>
            <button className="btn btn-warning">Add devide</button>
            <button onClick={addRectangle} className="btn btn-warning">
              Add rectangle
            </button>
            <button className="btn btn-warning">Add floor</button>
          </div>
        </div>
      </section>

      <section className="right flex-grow bg-red-300 h-screen">Hello</section>
    </div>
  );
}

export default ControlPage;
