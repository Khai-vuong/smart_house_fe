export function getMockApi() {
    return {
        house_id: "670709d1-e665-4f07-a3dd-f2d942a43d43",
        length: 20,
        width: 10,
        floors: [
            {
                floor_id: 1,
                rooms: [
                    {
                        room_id: 1,
                        length: 5,
                        width: 5,
                        x: 2,
                        y: 2,
                        devices: [
                            {
                                device_id: 1,
                                device_type: "light",
                                device_name: "Đèn phòng 1",
                                status: {}
                            }
                            
                        ],
                        sensors: []
                    },
                    {
                        room_id: 2,
                        length: 5,
                        width: 5,
                        x: 6,
                        y: 2,
                        devices: [
                            {
                                device_id: 2,
                                device_type: "light",
                                device_name: "Đèn phòng 2",
                                status: {}
                            }
                        ],
                        sensors: []
                    }
                ],
                devices: [
                    {
                        device_id: 3,
                        device_type: "light",
                        device_name: "Đèn tầng 1",
                        status: {},
                        x: 10,
                        y: 5
                    },
                    {
                        device_id: 4,
                        device_type: "light",
                        device_name: "Đèn phòng 1",
                        status: {},
                        x: 2,
                        y: 2
                    },
                    {
                        device_id: 5,
                        device_type: "light",
                        device_name: "Đèn phòng 2",
                        status: {},
                        x: 6,
                        y: 2
                    }
                ],
                sensors: [
                    {
                        sensor_id: 1,
                        sensor_type: "temperature_humidity",
                        sensor_name: "Cảm biến tầng 1",
                        value: {},
                        x: 2,
                        y: 1
                    }
                ]
            },
            {
                floor_id: 2,
                rooms: [
                    {
                        room_id: 3,
                        length: 5,
                        width: 5,
                        x: 2,
                        y: 6,
                        devices: [
                            {
                                device_id: 10,
                                device_type: "light",
                                device_name: "Đèn phòng 3",
                                status: {}
                            }
                        ],
                        sensors: []
                    },
                    {
                        room_id: 4,
                        length: 5,
                        width: 5,
                        x: 6,
                        y: 6,
                        devices: [
                            {
                                device_id: 6,
                                device_type: "light",
                                device_name: "Đèn phòng 4",
                                status: {}
                            }
                        ],
                        sensors: []
                    },
                    {
                        room_id: 5,
                        length: 5,
                        width: 5,
                        x: 10,
                        y: 6,
                        devices: [
                            {
                                device_id: 7,
                                device_type: "light",
                                device_name: "Đèn phòng 5",
                                status: {}
                            }
                        ],
                        sensors: []
                    }
                ],
                devices: [
                    {
                        device_id: 8,
                        device_type: "light",
                        device_name: "Đèn tầng 2",
                        status: {},
                        x: 10,
                        y: 5
                    },
                    {
                        device_id: 9,
                        device_type: "light",
                        device_name: "Đèn phòng 3",
                        status: {},
                        
                        x: 2,
                        y: 6
                    },
                    {
                        device_id: 11,
                        device_type: "light",
                        device_name: "Đèn phòng 4",
                        status: {},
                        x: 6,
                        y: 6
                    },
                    {
                        device_id: 12,
                        device_type: "light",
                        device_name: "Đèn phòng 5",
                        status: {},
                        
                        x: 10,
                        y: 6
                    }
                ],
                sensors: [
                    {
                        sensor_id: 2,
                        sensor_type: "temperature_humidity",
                        sensor_name: "Cảm biến tầng 2",
                        value: {},
                        
                        x: 2,
                        y: 1
                    }
                ]
            }
        ]
    };
}