export default function ItemPanel({ itemInfo }) {
  if (!itemInfo) return <p>No selected element</p>;
  return (
    <>
      <h1>Item panel</h1>
      {Object.entries(itemInfo).map(([key, value]) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))}
    </>
  );
}
