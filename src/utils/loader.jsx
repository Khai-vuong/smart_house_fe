import { useEffect } from "react";
import { getMockApi } from "../utils/mock.js"; //Fix this
import useStore from "../utils/useStoreNew.js"; //Fix this
import template from "./dragable_template.js";

export default function Loader() {
  const storage = useStore();

  useEffect(() => {
    const house = getMockApi();
    const shapeTemplate = template();

    house.floors.forEach((floor) => {
      storage.addFloor(shapeTemplate.importFloor(floor));
    });
  }, []); //Works as inteded

  return <div></div>;
}
