import NavBar from "../components/Navbar.jsx";
import Drag_n_drop from "../components/Drag_n_drop.jsx";

export default function ControlPage() {
  let maxFloor = 2;

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
            <button className="btn btn-warning">Add rectangle</button>
            <button className="btn btn-warning">Add floor</button>
          </div>
        </div>
      </section>

      <section className="right flex-grow bg-red-300 h-screen">Hello</section>
    </div>
  );
}
