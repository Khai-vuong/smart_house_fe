// import NavBar from "../components/Navbar.jsx";
import NavigationBar from "../component/NavBar/navbar.jsx";
import Drag_n_drop from "../components/Drag_n_drop.jsx";
import ItemPanel from "../components/ItemPanel.jsx";
import template from "../utils/dragable_template.js";

import { useEffect, useState } from "react";
import useStore from "../utils/useStore.js";

function ControlPage() {
  // Ensure useStore is correctly used
  const shapes = useStore();
  const maxFloor = 2;
  const shapeTemplate = template();

  const [rectangle_count, setRectangle_count] = useState(0);
  const [floor_count, setFloor_count] = useState(0);
  const [device_count, setDevice_count] = useState(0);
  const [sensor_count, setSensor_count] = useState(0);

  useEffect(() => {
    const savedItems = localStorage.getItem("dragItems");
    if (savedItems) {
      const parsedItems = JSON.parse(savedItems); // Convert string to array
      console.log(parsedItems);

      parsedItems.forEach((item) => {
        if (item.type === "rectangle") setRectangle_count((prev) => prev + 1);
        else if (item.type === "device") setDevice_count((prev) => prev + 1);
        else if (item.type === "sensor") setSensor_count((prev) => prev + 1);
      });
    }
  }, []);

  function addRectangle() {
    setRectangle_count(rectangle_count + 1);

    shapes.addElement(shapeTemplate.rectangle(rectangle_count));
  }

  function addSensor() {
    setSensor_count(sensor_count + 1);
    shapes.addElement(shapeTemplate.sensor(sensor_count));
  }

  function addDevice() {
    setDevice_count(device_count + 1);
    shapes.addElement(shapeTemplate.device(device_count));
  }

  function resetLocalStorage() {
    localStorage.removeItem("dragItems");
  }

  return (
    <div className="flex flex-row gap-4 w-screen h-screen bg-blue-300">
      {/* <NavBar selecting={1} className="left"></NavBar> this is  */}
      <section className="left w-[96px]">
        {/*the 96px is pre-calculated, fixed */}
        <NavigationBar></NavigationBar>
      </section>

      <section className="mid flex flex-col gap-4 w-3/5 h-full flex-grow-0">
        <div className="w-full h-[60vh] flex-grow-0">
          <Drag_n_drop></Drag_n_drop>
        </div>

        <div
          id="control__panel"
          className="bg-purple-300 flex-grow-1 flex flex-row"
        >
          <div className="buttons flex flex-col gap-2 w-1/4 mt-4 ml-4">
            <button onClick={addSensor} className="btn btn-warning">
              Add sensor
            </button>
            <button onClick={addDevice} className="btn btn-warning">
              Add device
            </button>
            <button onClick={addRectangle} className="btn btn-warning">
              Add rectangle
            </button>
            <button onClick={resetLocalStorage} className="btn btn-warning">
              Add floor
            </button>
          </div>
        </div>
      </section>

      <section className="right flex-grow bg-red-300 h-screen p-4">
        <h2 className="text-xl font-bold">Selected Elements</h2>
        <ItemPanel itemInfo={shapes.selectedElement}></ItemPanel>
      </section>
    </div>
  );
}

export default ControlPage;
