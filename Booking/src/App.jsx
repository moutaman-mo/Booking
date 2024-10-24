import {
  OutLetRouter,
  Home,
  Dashboard,
  Admin,
  Notification,
  Cities,
  CarOffice,
  CarType,
  Clinic,
  ClinicSpecialization,
  Hotel,
  RoomType,
  Restaurant,
  TableType,
} from "./index";
import "./App.css";
import PrimeReact from "./primeReact";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
export default function App() {
  const [visible, setVisible] = useState("");
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<OutLetRouter />}>
            <Route path="/" element={<Home />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Admin" element={<Admin />} />
            <Route path="Notification" element={<Notification />} />
            <Route path="Cities" element={<Cities />} />
            <Route path="Car-office" element={<CarOffice />} />
            <Route path="Car-type" element={<CarType />} />
            <Route path="Clinic" element={<Clinic />} />
            <Route
              path="ClinicSpecialization"
              element={<ClinicSpecialization />}
            />
            <Route path="Hotel" element={<Hotel />} />
            <Route path="Room-type" element={<RoomType />} />
            <Route path="Restaurant" element={<Restaurant />} />
            <Route path="Table-type" element={<TableType />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
