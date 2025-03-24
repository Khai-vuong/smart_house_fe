import house from "../assets/house-icon.png";
import layer from "../assets/layer.png";
import shield from "../assets/Shield.png";
import notebook from "../assets/Notebook.png";

export default function NavBar({ selecting }) {
  let items = [house, layer, shield, notebook];

  return (
    <nav className="bg-gray-800 p-4 h-screen w-[8%] ml-4 rounded-xl">
      <ul className="flex flex-col justify-between items-center gap-4 py-6">
        {items.map((item, index) => (
          <li key={index}>
            <img
              src={item}
              alt={`item-${index}`}
              className={
                selecting === index
                  ? "border-2 border-white rounded p-2 aspect-square"
                  : "p-2 aspect-square"
              }
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
