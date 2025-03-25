import useStore from "./useStore";

export default function template() {
  return {
    rectangle: (num) => {
      return {
        id: `rectangle-${num}`,
        type: "rectangle",
        x: 0,
        y: 0,
        z: useStore.getState().items.length,
        width: 100,
        height: 100,
        label: `Rectangle ${num}`,
        color: "0000ff",
      };
    },
  
    sensor: (num) => {
      return {
        id: `sensor-${num}`,
        type: "sensor",
        x: 0,
        y: 0,
        z: useStore.getState().items.length,
        width: 50,
        height: 50,
        label: `Sensor ${num}`,
        color: "00ff00",
        data: null,
      };
    },
  
    device: (num) => {
      return {
        id: `device-${num}`,
        type: "device",
        x: 0,
        y: 0,
        z: useStore.getState().items.length,
        width: 50,
        height: 50,
        label: `Device ${num}`,
        color: "ff0000",
        data: null,
      };
    }
  };
}