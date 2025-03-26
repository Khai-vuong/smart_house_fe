import { create } from "zustand";

// Load saved floors from localStorage
const getSavedFloors = () => {
  const saved = localStorage.getItem("floors");
  return saved ? JSON.parse(saved) : [];
};

const useStore = create((set) => ({
    numOfFloors: 0,
    numOfRooms: 0,
    numOfDevices: 0,
    numOfSensors: 0,

  floors: getSavedFloors(), // Load saved floors
  selectedElement: null, // Store the selected element
  currentFloor: 0, // Track the current floor

  addElement: (newElement) =>
    set((state) => {
      const updatedFloors = [...state.floors];
      updatedFloors[state.currentFloor] = [
        ...(updatedFloors[state.currentFloor] || []), 
        newElement
      ];
      localStorage.setItem("floors", JSON.stringify(updatedFloors)); // Save to localStorage
      return { floors: updatedFloors };
    }),

  updateElement: (id, newX, newY) =>
    set((state) => {
      const updatedFloors = [...state.floors];
      updatedFloors[state.currentFloor] = updatedFloors[state.currentFloor].map((el) =>
        el.id === id ? { ...el, x: newX, y: newY } : el
      );
      localStorage.setItem("floors", JSON.stringify(updatedFloors)); // Save to localStorage
      return { floors: updatedFloors };
    }),

  selectElement: (id) =>
    set((state) => ({
      selectedElement:
        state.floors[state.currentFloor]?.find((el) => el.id === id) || null,
    })),

  changeStyle: (id, newStyle) =>
    set((state) => {
      const updatedFloors = [...state.floors];
      updatedFloors[state.currentFloor] = updatedFloors[state.currentFloor].map((el) =>
        el.id === id ? { ...el, ...newStyle } : el
      );
      localStorage.setItem("floors", JSON.stringify(updatedFloors)); // Save to localStorage
      return { floors: updatedFloors };
    }),

  setCurrentFloor: (floorIndex) =>
    set(() => ({
      currentFloor: floorIndex,
    })),

    addFloor: (newFloor) =>
      set((state) => {
        const updatedFloors = [...state.floors, newFloor];
        localStorage.setItem("floors", JSON.stringify(updatedFloors)); // Save to localStorage
        return { floors: updatedFloors };
      }),
    
    removeFloor: (index) =>
      set((state) => {
        const updatedFloors = state.floors.filter((_, i) => i !== index);
        localStorage.setItem("floors", JSON.stringify(updatedFloors)); // Save to localStorage
        return { floors: updatedFloors };
      }),

  
    updateStats: () => 
        set((state) => {
            const numOfFloors = state.floors.length;
            let numOfRooms = 0;
            let numOfDevices = 0;
            let numOfSensors = 0;
            
            state.floors.forEach((floor) => {
              floor.forEach((item) => {
                if (item.type === "room") {
                  numOfRooms += 1;
                } else if (item.type === "device") {
                  numOfDevices += 1;
                } else if (item.type === "sensor") {
                  numOfSensors += 1;
                }
              });
            });

            localStorage.setItem("floors", JSON.stringify(state.floors)); // Save to localStorage
            return { numOfFloors, numOfRooms, numOfDevices, numOfSensors };
    }),

    resetStorage: () => set(() => {
        localStorage.removeItem("floors");
        return { floors: [], selectedElement: null, currentFloor: 0 };
    }),

}));

export default useStore;