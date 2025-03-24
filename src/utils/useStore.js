import { create } from "zustand";

const useStore = create((set) => ({
  items: [
    { id: "box-1", x: 50, y: 50 },
    { id: "box-2", x: 0, y: 0 },
  ], // Initialize items with positions

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

  deleteElement: (id) =>
    set((state) => ({
      items: state.items.filter((el) => el.id !== id),
    })),
}));

export default useStore;
