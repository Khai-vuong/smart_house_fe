import useStore from "../utils/useStore";
import { useState, useEffect } from "react";

export default function ItemPanel() {
  const selectedElement = useStore((state) => state.selectedElement);
  const changeStyle = useStore((state) => state.changeStyle);

  const [formData, setFormData] = useState({
    width: "",
    height: "",
    label: "",
    color: "",
    z: "",
  });

  useEffect(() => {
    if (selectedElement) {
      setFormData({
        width: selectedElement.width || "",
        height: selectedElement.height || "",
        label: selectedElement.label || "",
        color: selectedElement.color || "",
        z: selectedElement.z || "",
      });
    }
  }, [selectedElement]);

  const handleChange = (e) => {
    alert("mod-ing" + selectedElement.id);
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (selectedElement?.id) {
      changeStyle(selectedElement.id, { [name]: value });
    }
  };

  if (!selectedElement) return <p>No selected element</p>;
  return (
    <>
      <div
        className="grid grid-cols-2 gap-4 p-4 mt-4 w-full"
        style={{ backgroundColor: selectedElement.color || "transparent" }}
      >
        {["width", "height", "label", "color", "z"].map((key) => (
          <label key={key} className="flex flex-col">
            {key}:
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              placeholder={`Enter ${key}`}
              className="border p-1 rounded"
            />
          </label>
        ))}
        <div
          id="item-panel__color-display"
          className="bg-color rounded-2xl text-center"
          style={{
            backgroundColor: selectedElement.color
              ? `#${selectedElement.color}`
              : "transparent",
          }}
        >
          {selectedElement.color}
        </div>
      </div>

      <div className="description mt-3 text-xl">
        <h1 className="font-bold underline">Object's info</h1>
        {Object.entries(selectedElement).map(([key, value]) => (
          <p key={key}>
            {key}: {value}
          </p>
        ))}
      </div>
    </>
  );
}
