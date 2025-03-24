import { create } from "zustand";

const useStore = create((set) => ({
  items: [],

  selectedElement: null, // Store the selected element

  addElement: (newElement) =>
    set((state) => ({
      items: [...state.items, newElement],
    })),


  updateElement: (id, newX, newY) =>
    set((state) => ({
      items: state.items.map((el) =>
        el.id === id ? { ...el, x: newX, y: newY } : el
      ),
    })),


  selectElement: (id) =>
    set((state) => ({
      selectedElement: state.items.find((el) => el.id === id) || null,
    })),
}));

export default useStore;
