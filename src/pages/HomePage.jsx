import { Home, Layers, Shield, FileText, LogOut, UserPlus, UserMinus } from "lucide-react";
import { useState } from "react";

export default function SmartHomeDashboard() {
  const [devices, setDevices] = useState({
    fan: false,
    acFloor1: true,
    washingMachine: true,
    acBasement: true
  });

  const toggleDevice = (device) => {
    setDevices({
      ...devices,
      [device]: !devices[device]
    });
  };

  return (
    <div className="flex h-screen bg-gray-100">
    
      <div className="w-24 bg-purple-400 flex flex-col items-center justify-between py-8">
        <div className="flex flex-col items-center gap-12">
          <div className="bg-purple-600 p-4 rounded-full">
            <Home className="text-white" size={24} />
          </div>
          <Layers className="text-white" size={24} />
          <Shield className="text-white" size={24} />
          <FileText className="text-white" size={24} />
        </div>
        <LogOut className="text-white" size={24} />
      </div>

     
      <div className="flex-1 flex flex-col">
        <div className="flex flex-1">
         
          <div className="flex-1 p-6 flex flex-col gap-6">
            {/* Weather Widget */}
            <div className="bg-yellow-200 p-6 rounded-xl">
              <div className="mb-6">
                <p className="text-xl font-medium">Nhiệt độ hôm nay: 30c</p>
                <p className="text-xl font-medium">Trời ít mây</p>
              </div>
              <div className="text-center my-4">
                <h2 className="text-2xl font-bold">DASH BOARD HIỂN THỊ NHỮNG THÔNG TIN</h2>
                <h2 className="text-2xl font-bold">CẦN THIẾT NHƯ THỐNG KÊ, WEATHER API</h2>
                <h2 className="text-2xl font-bold">TỪ GOOGLE,...</h2>
              </div>
            </div>

           
            <div>
              <h3 className="text-2xl font-bold mb-4">CÁC THIẾT BỊ THƯỜNG DÙNG</h3>
              
              <div className="grid grid-cols-3 gap-4">
               
                <div className="bg-blue-300 p-4 rounded-xl">
                  <p className="mb-4 text-lg font-medium">Quạt - Tầng trệt</p>
                  <button 
                    className={`w-full py-2 rounded-md text-white font-medium ${devices.fan ? 'bg-green-400' : 'bg-red-500'}`}
                    onClick={() => toggleDevice('fan')}
                  >
                    {devices.fan ? 'ON' : 'OFF'}
                  </button>
                </div>
                
                <div className="bg-blue-300 p-4 rounded-xl">
                  <p className="mb-4 text-lg font-medium">Máy lạnh tầng 1</p>
                  <button 
                    className={`w-full py-2 rounded-md text-white font-medium ${devices.acFloor1 ? 'bg-green-400' : 'bg-red-500'}`}
                    onClick={() => toggleDevice('acFloor1')}
                  >
                    {devices.acFloor1 ? 'ON' : 'OFF'}
                  </button>
                </div>
                
               
                <div className="bg-blue-300 p-4 rounded-xl">
                  <p className="mb-4 text-lg font-medium">Máy giặt</p>
                  <button 
                    className={`w-full py-2 rounded-md text-white font-medium ${devices.washingMachine ? 'bg-green-400' : 'bg-red-500'}`}
                    onClick={() => toggleDevice('washingMachine')}
                  >
                    {devices.washingMachine ? 'ON' : 'OFF'}
                  </button>
                </div>
                
                {/* AC Basement */}
                <div className="bg-blue-300 p-4 rounded-xl">
                  <p className="mb-4 text-lg font-medium">Điều hòa - tầng hầm</p>
                  <button 
                    className={`w-full py-2 rounded-md text-white font-medium ${devices.acBasement ? 'bg-green-400' : 'bg-red-500'}`}
                    onClick={() => toggleDevice('acBasement')}
                  >
                    {devices.acBasement ? 'ON' : 'OFF'}
                  </button>
                </div>
              </div>
            </div>
          </div>

       
          <div className="w-64 bg-orange-100 p-6 flex flex-col">
            {/* User Welcome */}
            <div className="flex flex-col items-center mb-8">
              <div className="bg-red-300 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                <div className="bg-blue-600 w-16 h-16 rounded-full relative">
                  <div className="absolute bottom-1/4 w-full h-8 bg-blue-600 rounded-t-md"></div>
                  <div className="absolute bottom-1/4 left-1/4 right-1/4 h-4 bg-black rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold">Welcome home,</h3>
              <h2 className="text-2xl font-bold">Nigg</h2>
            </div>

            
            <div className="flex justify-around mb-12">
              <div className="flex flex-col items-center">
                <div className="bg-red-300 rounded-full w-14 h-14 flex items-center justify-center mb-2">
                  <div className="bg-blue-600 w-12 h-12 rounded-full relative">
                    <div className="absolute bottom-1/4 w-full h-6 bg-blue-600 rounded-t-md"></div>
                    <div className="absolute bottom-1/4 left-1/4 right-1/4 h-3 bg-black rounded-full"></div>
                  </div>
                </div>
                <p className="font-bold">Nigg</p>
                <p className="text-sm">Owner</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-blue-300 rounded-full w-14 h-14 flex items-center justify-center mb-2">
                  <div className="w-12 h-12 rounded-full bg-gray-400 relative">
                    <div className="absolute bottom-1/4 w-full h-6 rounded-t-md"></div>
                  </div>
                </div>
                <p className="font-bold">Anna</p>
                <p className="text-sm">Wifi</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-red-300 rounded-full w-14 h-14 flex items-center justify-center mb-2">
                  <div className="w-12 h-12 rounded-full bg-gray-800 relative">
                    <div className="absolute top-1/4 w-full h-8 bg-black rounded-full"></div>
                  </div>
                </div>
                <p className="font-bold">Lily</p>
                <p className="text-sm">500k$</p>
              </div>
            </div>

           
            <div className="mt-auto">
              <div className="flex items-center mb-4">
                <div className="mr-4 bg-gray-200 rounded-full p-2">
                  <UserPlus size={20} />
                </div>
                <p className="font-medium">Add member</p>
              </div>
              <div className="flex items-center">
                <div className="mr-4 bg-gray-200 rounded-full p-2">
                  <UserMinus size={20} />
                </div>
                <p className="font-medium">Remove member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}