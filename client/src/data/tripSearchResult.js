export const getAllTrip = [
  {
    id: "BUS123",
    bus_id: "BUS123",
    bus_model: "Volvo B7R",
    driver_id: "DRV456",
    traveling_date: "2023-09-15",
    departure_time: "08:00 AM",
    arrival_time: "03:30 PM",
    from: "City A",
    to: "City B",
    fare: 1500,
    seat_type: "AC",
    available_seat: 10,
    total_seat: 40,
  },
  {
    id: "BUS456",
    bus_id: "BUS456",
    bus_model: "Scania K360",
    driver_id: "DRV789",
    traveling_date: "2023-09-16",
    departure_time: "10:30 AM",
    arrival_time: "06:00 PM",
    from: "City B",
    to: "City C",
    fare: 1200,
    seat_type: "AC",
    available_seat: 20,
    total_seat: 50,
  },
  {
    id: "BUS789",
    bus_id: "BUS789",
    bus_model: "Mercedes-Benz Tourismo",
    driver_id: "DRV123",
    traveling_date: "2023-09-17",
    departure_time: "09:00 AM",
    arrival_time: "05:30 PM",
    from: "City C",
    to: "City D",
    fare: 1800,
    seat_type: "nonAC",
    available_seat: 5,
    total_seat: 35,
  },
  {
    id: "BUS234",
    bus_id: "BUS234",
    bus_model: "MAN Lion's Coach",
    driver_id: "DRV234",
    traveling_date: "2023-09-18",
    departure_time: "07:30 AM",
    arrival_time: "04:00 PM",
    from: "City D",
    to: "City A",
    fare: 1350,
    seat_type: "AC",
    available_seat: 15,
    total_seat: 45,
  },
  {
    id: "BUS567",
    bus_id: "BUS567",
    bus_model: "Iveco Crossway",
    driver_id: "DRV567",
    traveling_date: "2023-09-21",
    departure_time: "11:00 AM",
    arrival_time: "07:30 PM",
    from: "City B",
    to: "City D",
    fare: 1100,
    seat_type: "nonAC",
    available_seat: 25,
    total_seat: 30,
  },
  {
    id: "BUS890",
    bus_id: "BUS890",
    bus_model: "Neoplan Skyliner",
    driver_id: "DRV890",
    traveling_date: "2023-09-21",
    departure_time: "08:45 AM",
    arrival_time: "06:15 PM",
    from: "City A",
    to: "City C",
    fare: 1600,
    seat_type: "AC",
    available_seat: 8,
    total_seat: 50,
  },
  {
    id: "BUS345",
    bus_id: "BUS345",
    bus_model: "Setra S431 DT",
    driver_id: "DRV345",
    traveling_date: "2023-09-21",
    departure_time: "09:15 AM",
    arrival_time: "05:45 PM",
    from: "City D",
    to: "City B",
    fare: 1250,
    seat_type: "AC",
    available_seat: 30,
    total_seat: 40,
  },
];

export const getSingleTrip = {
  id: "BUS123",
  bus_id: "BUS123",
  bus_model: "Volvo B7R",
  driver_id: "DRV456",
  traveling_date: "2023-09-15",
  departure_time: "08:00 AM",
  arrival_time: "03:30 PM",
  from: "City A",
  to: "City B",
  fare: 1500,
  seat_type: "AC",
  available_seat: 10,
  total_seat: 40,
  seats: [
    { name: "A1", isAvailable: true },
    { name: "A2", isAvailable: true },
    { name: "A" },
    { name: "A3", isAvailable: true },
    { name: "A4", isAvailable: true },
    { name: "B1", isAvailable: true },
    { name: "B2", isAvailable: true },
    { name: "B" },
    { name: "B3", isAvailable: true },
    { name: "B4", isAvailable: true },
    { name: "C1", isAvailable: true },
    { name: "C2", isAvailable: true },
    { name: "C" },
    { name: "C3", isAvailable: true },
    { name: "C4", isAvailable: true },
    { name: "D1", isAvailable: true },
    { name: "D2", isAvailable: true },
    { name: "D" },
    { name: "D3", isAvailable: true },
    { name: "D4", isAvailable: true },
    { name: "E1", isAvailable: true },
    { name: "E2", isAvailable: true },
    { name: "E" },
    { name: "E3", isAvailable: true },
    { name: "E4", isAvailable: true },
    { name: "F1", isAvailable: true },
    { name: "F2", isAvailable: true },
    { name: "F" },
    { name: "F3", isAvailable: true },
    { name: "F4", isAvailable: true },
    { name: "G1", isAvailable: true },
    { name: "G2", isAvailable: true },
    { name: "G" },
    { name: "G3", isAvailable: true },
    { name: "G4", isAvailable: true },
    { name: "H1", isAvailable: true },
    { name: "H2", isAvailable: true },
    { name: "H" },
    { name: "H3", isAvailable: true },
    { name: "H4", isAvailable: true },
    { name: "I1", isAvailable: true },
    { name: "I2", isAvailable: true },
    { name: "I" },
    { name: "I3", isAvailable: true },
    { name: "I4", isAvailable: true },
    { name: "J1", isAvailable: true },
    { name: "J2", isAvailable: true },
    { name: "J" },
    { name: "J3", isAvailable: true },
    { name: "J4", isAvailable: true },
  ],
  reviews: [
    { rating: 4.5, review: "" },
    { rating: 4.7, review: "" },
  ],
};
