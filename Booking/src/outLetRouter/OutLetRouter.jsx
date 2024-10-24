import "./OutLetRouter.css";
import { Outlet } from "react-router-dom";
import NavScrollExample from "../navScrollExample/NavScrollExample";
import HeadlessDemoSideBar from "../sideBar/SideBar";
import { useState } from "react";
export default function OutLetRouter() {
  const [visible, setVisible] = useState("");

  return (
    <div>
      <NavScrollExample visible={visible} setVisible={setVisible} />
      <HeadlessDemoSideBar visible={visible} setVisible={setVisible} />
      <Outlet />
    </div>
  );
}
