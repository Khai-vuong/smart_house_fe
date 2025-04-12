import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialItems = [
  // Rectangle
  {
    id: 'rectangle-1',
    type: 'rectangle',
    x: 50,
    y: 50,
    z: 0,
    width: 200,
    height: 150,
    label: 'Room 1',
    color: '0000ff'
  },
  // 9 Devices
  ...Array(9).fill(null).map((_, index) => ({
    id: `device-${index + 1}`,
    type: 'device',
    x: 300 + (index % 3) * 100,
    y: 50 + Math.floor(index / 3) * 100,
    z: index + 1,
    width: 50,
    height: 50,
    label: `Device ${index + 1}`,
    color: 'ff0000',
    data: null
  })),
  // 5 Sensors
  ...Array(5).fill(null).map((_, index) => ({
    id: `sensor-${index + 1}`,
    type: 'sensor',
    x: 50 + index * 100,
    y: 300,
    z: index + 10,
    width: 50,
    height: 50,
    label: `Sensor ${index + 1}`,
    color: '00ff00',
    data: null
  }))
];

const useStore = create((set, get) => ({
  items: initialItems,
  selectedElement: null,
  hasUnsavedChanges: false,

  updateElement: (id, newX, newY) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, x: newX, y: newY } : item
      ),
      hasUnsavedChanges: true,
    })),

  selectElement: (id) =>
    set((state) => ({
      selectedElement: state.items.find((item) => item.id === id) || null,
    })),

  changeStyle: (id, newStyle) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, ...newStyle } : item
      ),
      hasUnsavedChanges: true,
    })),
    
  // Thêm hàm mới để cập nhật dữ liệu của phần tử
  updateElementData: (id, newData) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, data: { ...item.data, ...newData } } : item
      ),
      hasUnsavedChanges: true,
    })),

  resetItems: () => 
    set(() => ({
      items: initialItems,
      selectedElement: null,
      hasUnsavedChanges: false,
    })),
    
  // Thêm hàm mới để cập nhật items từ API
  setItemsFromApi: (apiItems) =>
    set(() => ({
      items: apiItems,
      selectedElement: null,
      hasUnsavedChanges: false,
    })),
    
  // Hàm để đánh dấu đã lưu
  markAsSaved: () =>
    set(() => ({
      hasUnsavedChanges: false,
    })),
    
  // Hàm để lấy trạng thái có thay đổi chưa lưu
  getHasUnsavedChanges: () => get().hasUnsavedChanges,
}));

export default useStore;