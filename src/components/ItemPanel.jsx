import useStore from "../utils/useStore";
import { useState, useEffect } from "react";

export default function ItemPanel({ itemInfo }) {
  const changeStyle = useStore((state) => state.changeStyle);

  const [formData, setFormData] = useState({
    width: "",
    height: "",
    label: "",
    color: "",
    z: "",
  });

  useEffect(() => {
    if (itemInfo) {
      setFormData({
        width: itemInfo.width || "",
        height: itemInfo.height || "",
        label: itemInfo.label || "",
        color: itemInfo.color || "",
        z: itemInfo.z || "",
      });
    }
  }, [itemInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (itemInfo?.id) {
      changeStyle(itemInfo.id, { [name]: value });
    }
  };

  if (!itemInfo) return <p>No selected element</p>;
  return (
    <>
      <div
        className="grid grid-cols-2 gap-4 p-4 mt-4 w-full"
        style={{ backgroundColor: itemInfo.color || "transparent" }}
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
            backgroundColor: itemInfo.color
              ? `#${itemInfo.color}`
              : "transparent",
          }}
        >
          {itemInfo.color}
        </div>
      </div>

      <div className="description mt-3 text-xl">
        <h1 className="font-bold underline">Object's info</h1>
        {Object.entries(itemInfo).map(([key, value]) => (
          <p key={key}>
            {key}: {value}
          </p>
        ))}
      </div>
    </>
  );
}
