import NavigationBar from "../component/NavBar/navbar.jsx";
import ItemPanel from "../components/ItemPanel.jsx";
import template from "../utils/dragable_template.js";
import { API_CONFIG, USER_CONFIG, DEFAULT_CONFIG } from "../config/appConfig";

import { useEffect, useState } from "react";
import useStore from "../utils/useStore.js";
import HouseMap from "../components/HouseMap.jsx";
import { useHouseData } from "../utils/useHouseData.js";
import axios from "axios";
import { fetchHouseData } from "../utils/apiService.js";

function ControlPage() {
  // Ensure useStore is correctly used
  const storage = useStore();
  const shapeTemplate = template();
  const [saveStatus, setSaveStatus] = useState({
    saving: false,
    success: false,
    message: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  // Fetch dữ liệu từ API khi trang web được tải hoặc refresh
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setFetchError(null);

      try {
        const success = await fetchHouseData(storage.setItemsFromApi);
        if (!success) {
          setFetchError(
            "Không thể tải dữ liệu từ API. Sử dụng dữ liệu mặc định."
          );
        }
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
        setFetchError(
          "Lỗi khi tải dữ liệu: " + (error.message || "Không xác định")
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [storage.setItemsFromApi]);

  function addRectangle() {
    const roomCount = storage.getState().numOfRooms;
    storage.addElement(shapeTemplate.rectangle(roomCount));
  }

  function addSensor() {
    const sensorCount = storage.getState().numOfSensors;
    storage.addElement(shapeTemplate.sensor(sensorCount));
  }

  function addDevice() {
    const deviceCount = storage.getState().numOfDevices;
    storage.addElement(shapeTemplate.device(deviceCount));
  }

  function resetLocalStorage() {
    // storage.resetLocalStorage();
    localStorage.removeItem("floors");
  }

  const handleSave = async () => {
    setSaveStatus({ saving: true, success: false, message: "Đang lưu..." });

    try {
      // Lấy dữ liệu từ useStore
      const items = storage.items;

      // Chuyển đổi dữ liệu sang định dạng API
      let apiData = {
        uid: USER_CONFIG.UID,
        house_id: USER_CONFIG.HOUSE_ID,
        length: 0,
        width: 0,
        floors: [
          {
            floor_id: DEFAULT_CONFIG.FLOOR_ID,
            rooms: [],
            devices: [],
            sensors: [],
          },
        ],
      };

      // Phân loại các phần tử
      const rooms = [];
      const devices = [];
      const sensors = [];

      items.forEach((item) => {
        if (item.type === "rectangle") {
          // Lấy room_id từ id (rectangle-1 -> 1)
          const roomId = parseInt(item.id.split("-")[1]);

          rooms.push({
            room_id: roomId,
            name: item.label || `room-${roomId}`,
            length: item.height,
            width: item.width,
            x: item.x,
            y: item.y,
            color: item.color,
            devices: [],
            sensors: [],
          });
        } else if (item.type === "device") {
          // Lấy device_id từ id (device-1 -> 1)
          const deviceId = parseInt(item.id.split("-")[1]);

          devices.push({
            device_id: deviceId,
            device_type: "",
            device_name: item.label || `device-${deviceId}`,
            color: item.color,
            status: {},
            x: item.x,
            y: item.y,
          });
        } else if (item.type === "sensor") {
          // Lấy sensor_id từ id (sensor-1 -> 1)
          const sensorId = parseInt(item.id.split("-")[1]);

          sensors.push({
            sensor_id: sensorId,
            sensor_type: "",
            sensor_name: item.label || `sensor-${sensorId}`,
            color: item.color,
            x: item.x,
            y: item.y,
          });
        }
      });

      // Cập nhật dữ liệu API
      apiData.floors[0].rooms = rooms;
      apiData.floors[0].devices = devices;
      apiData.floors[0].sensors = sensors;

      console.log("Before send\n" + JSON.stringify(apiData, null, 2));

      // Gửi dữ liệu lên API
      const response = await axios.post(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.UPDATE}`,
        apiData
      );

      console.log("Res\n" + JSON.stringify(response.data, null, 2));

      if (response.status === 201) {
        setSaveStatus({
          saving: false,
          success: true,
          message: "Đã lưu thành công!",
        });

        // Đánh dấu đã lưu trong useStore
        storage.markAsSaved();

        // Ẩn thông báo sau 3 giây
        setTimeout(() => {
          setSaveStatus({ saving: false, success: false, message: "" });
        }, 3000);
      } else {
        throw new Error("Lỗi khi lưu dữ liệu");
      }
    } catch (error) {
      console.error("Lỗi khi lưu dữ liệu:", error);
      setSaveStatus({
        saving: false,
        success: false,
        message: "Lỗi khi lưu dữ liệu: " + (error.message || "Không xác định"),
      });
    }
  };

  return (
    <div className="flex flex-row gap-4 w-screen h-screen bg-blue-300">
      <section className="left w-[96px]">
        {/*the 96px is pre-calculated, fixed */}
        <NavigationBar></NavigationBar>
      </section>

      <section className="mid flex flex-col gap-4 w-3/5 h-full flex-grow-0">
        <div className="w-full h-[60vh] flex-grow-0 overflow-hidden">
          {isLoading ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-xl font-bold">Đang tải dữ liệu...</div>
            </div>
          ) : fetchError ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-xl font-bold text-red-500">{fetchError}</div>
            </div>
          ) : (
            <div className="w-full h-full">
              {/* Sử dụng HouseMap thay vì Drag_n_drop */}
              <HouseMap />
            </div>
          )}
        </div>

        <div
          id="control__panel"
          className="bg-purple-300 flex-grow-1 flex flex-row mt-4"
        >
          <div className="buttons flex flex-col gap-2 w-1/4 mt-4 ml-4">
            <button onClick={addSensor} className="btn btn-warning">
              Add sensor
            </button>
            <button onClick={addDevice} className="btn btn-warning">
              Add device
            </button>
            <button onClick={addRectangle} className="btn btn-warning">
              Add rectangle
            </button>
            <button onClick={resetLocalStorage} className="btn btn-warning">
              Add floor
            </button>
            <button
              onClick={handleSave}
              className={`btn ${
                saveStatus.saving ? "btn-disabled" : "btn-success"
              }`}
              disabled={saveStatus.saving}
            >
              {saveStatus.saving ? "Đang lưu..." : "Lưu thay đổi"}
            </button>

            {saveStatus.message && (
              <div
                className={`mt-2 p-2 rounded ${
                  saveStatus.success
                    ? "bg-green-200 text-green-800"
                    : "bg-red-200 text-red-800"
                }`}
              >
                {saveStatus.message}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="right flex-grow bg-red-300 h-screen p-4">
        <h2 className="text-xl font-bold">Selected Elements</h2>
        <ItemPanel></ItemPanel>
      </section>
    </div>
  );
}

export default ControlPage;
