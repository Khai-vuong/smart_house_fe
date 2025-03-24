const rectangle = {
    id: "area1",
    x: 50,
    y: 50,
    type: "rectangle",

    //Only for rectangle
    width: 200,
    height: 150,
    label: "Living Room",
    color: "#FFD700"
  };
  
  const device = {
    id: "device1",
    x: 120,
    y: 80,
    type: "device",
    label: "Router",
    data: { status: "online", ip: "192.168.1.1" }
  };
  
  const sensor = {
    id: "sensor1",
    x: 180,
    y: 200,
    type: "sensor",
    label: "Temperature Sensor",
    data: { temperature: 25.4, unit: "°C" }
  };
  