export default function ItemPanel({ itemInfo }) {
  if (!itemInfo) return <p>No selected element</p>;
  return (
    <>
      <div
        className="grid grid-cols-2 gap-4 p-4 mt-4 w-full"
        style={{ backgroundColor: itemInfo.color || "transparent" }}
      >
        <label className="flex flex-col ">
          Width:
          <input
            type="text"
            name="width"
            placeholder={itemInfo.width || "Enter width"}
            className="border p-1 rounded"
          />
        </label>

        <label className="flex flex-col ">
          Height:
          <input
            type="text"
            name="height"
            placeholder={itemInfo.height || "Enter height"}
            className="border p-1 rounded"
          />
        </label>

        <label className="flex flex-col ">
          Label:
          <input
            type="text"
            name="label"
            placeholder={itemInfo.label || "Enter label"}
            className="border p-1 rounded"
          />
        </label>

        <label className="flex flex-col ">
          Color:
          <input
            type="text"
            name="color"
            placeholder={itemInfo.color || "Enter color"}
            className="border p-1 rounded"
          />
        </label>
        <label className="flex flex-col ">
          Z:
          <input
            type="text"
            name="z"
            placeholder={itemInfo.z || "Enter z level"}
            className="border p-1 rounded"
          />
        </label>
        <div
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
