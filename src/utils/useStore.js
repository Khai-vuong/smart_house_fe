import { create } from "zustand";

// Load saved items from localStorage
const getSavedItems = () => {
  const saved = localStorage.getItem("dragItems");
  return saved ? JSON.parse(saved) : [];
};

const useStore = create((set) => ({
  items: getSavedItems(), // Load saved items
  selectedElement: null, // Store the selected element

  addElement: (newElement) =>
    set((state) => {
      const updatedItems = [...state.items, newElement];
      localStorage.setItem("dragItems", JSON.stringify(updatedItems)); // Save to localStorage
      return { items: updatedItems };
    }),

  updateElement: (id, newX, newY) =>
    set((state) => {
      const updatedItems = state.items.map((el) =>
        el.id === id ? { ...el, x: newX, y: newY } : el
      );
      localStorage.setItem("dragItems", JSON.stringify(updatedItems)); // Save to localStorage
      return { items: updatedItems };
    }),

  selectElement: (id) =>
    set((state) => ({
      selectedElement: state.items.find((el) => el.id === id) || null,
    })),
}));

export default useStore;
