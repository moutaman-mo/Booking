import "./SideBar.css";
import {
  FaCity,
  FaBell,
  FaTruckArrowRight,
  FaHouseChimneyWindow,
  FaHotel,
  FaHouse,
  FaBed,
  FaTruckFast,
  FaTruckPickup,
  FaTableList,
  FaUserDoctor,
  FaHouseMedical,
  FaHospitalUser,
  FaPizzaSlice,
  FaHouseChimney,
  FaUserTie,
} from "react-icons/fa6";
import { FaChessQueen } from "react-icons/fa6";

import { Link } from "react-router-dom";
import React, { useRef } from "react";
import { Sidebar } from "primereact/sidebar";
import { Avatar } from "primereact/avatar";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import primeReact from "../primeReact";

export default function HeadlessDemoSideBar({ visible, setVisible }) {
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const btnRef3 = useRef(null);
  const btnRef4 = useRef(null);
  const btnRef5 = useRef(null);
  const btnRef6 = useRef(null);

  return (
    <div className="card flex justify-content-center w-50%">
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        content={({ closeIconRef, hide }) => (
          <div className="min-h-screen flex relative lg:static surface-ground">
            <div
              id="app-sidebar-2"
              className="surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
              style={{ width: "280px" }}
            >
              <div className="flex flex-column h-full">
                <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                  <span className="inline-flex align-items-center gap-2">
                    <Link
                      to="/"
                      className="font-semibold text-2xl text-primary"
                    >
                      <FaChessQueen />
                      Booking
                    </Link>
                  </span>
                </div>
                <div className="overflow-y-auto">
                  <ul className="list-none p-3 m-0">
                    <li>
                      <StyleClass
                        nodeRef={btnRef1}
                        selector="@next"
                        enterClassName="hidden"
                        enterActiveClassName="slidedown"
                        leaveToClassName="hidden"
                        leaveActiveClassName="slideup"
                      >
                        <div
                          ref={btnRef1}
                          className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                        >
                          <span className="font-medium">Super Admin</span>
                          <i className="pi pi-chevron-down react-icon"></i>
                          <Ripple />
                        </div>
                      </StyleClass>
                      <ul className="list-none p-0 m-0 overflow-hidden">
                        <li>
                          <Link
                            to="/Dashboard"
                            className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                          >
                            <FaHouseChimney className="react-icon" />
                            <span className="font-medium">Dashboard</span>
                            <Ripple />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Admin"
                            className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                          >
                            <FaUserTie className="react-icon" />
                            <span className="font-medium">Admins</span>
                            <Ripple />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Cities"
                            className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                          >
                            <FaCity className="react-icon" />
                            <span className="font-medium">Cities</span>
                            <Ripple />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Notification"
                            className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                          >
                            <FaBell style={{ marginRight: "8px" }} />
                            <span className="font-medium">Notification</span>
                            <span
                              className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle"
                              style={{ minWidth: "1.5rem", height: "1.5rem" }}
                            >
                              3
                            </span>
                            <Ripple />
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="list-none p-3 m-0">
                    <li>
                      <StyleClass
                        nodeRef={btnRef2}
                        selector="@next"
                        enterClassName="hidden"
                        enterActiveClassName="slidedown"
                        leaveToClassName="hidden"
                        leaveActiveClassName="slideup"
                      >
                        <div
                          ref={btnRef2}
                          className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                        >
                          <span className="font-medium">Places</span>
                          <i className="pi pi-chevron-down react-icon"></i>
                          <Ripple />
                        </div>
                      </StyleClass>
                      <ul className="list-none p-0 m-0 overflow-hidden">
                        <li>
                          <StyleClass
                            nodeRef={btnRef3}
                            selector="@next"
                            enterClassName="hidden"
                            enterActiveClassName="slidedown"
                            leaveToClassName="hidden"
                            leaveActiveClassName="slideup"
                          >
                            <a
                              ref={btnRef3}
                              className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                            >
                              <FaTruckArrowRight className="react-icon" />
                              <span className="font-medium">Car Offices</span>
                              <i className="pi pi-chevron-down ml-auto mr-1 react-icon"></i>
                              <Ripple />
                            </a>
                          </StyleClass>
                          <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li>
                              <Link
                                to="/CarOffice"
                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                              >
                                <FaTruckFast className="react-icon" />
                                <span className="font-medium">Car Office</span>
                                <Ripple />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/CarType"
                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                              >
                                <FaTruckPickup className="react-icon" />
                                <span className="font-medium">Car Type</span>
                                <Ripple />
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <StyleClass
                            nodeRef={btnRef4}
                            selector="@next"
                            enterClassName="hidden"
                            enterActiveClassName="slidedown"
                            leaveToClassName="hidden"
                            leaveActiveClassName="slideup"
                          >
                            <a
                              ref={btnRef4}
                              className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                            >
                              <FaHouseChimneyWindow className="react-icon" />
                              <span className="font-medium">Restaurants</span>
                              <i className="pi pi-chevron-down ml-auto mr-1 react-icon"></i>
                              <Ripple />
                            </a>
                          </StyleClass>
                          <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li>
                              <Link
                                to="/Restaurant"
                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                              >
                                <FaPizzaSlice className="react-icon" />
                                <span className="font-medium">Restaurant</span>
                                <Ripple />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/TableType"
                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                              >
                                <FaTableList className="react-icon" />

                                <span className="font-medium">Table Type</span>
                                <Ripple />
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <StyleClass
                            nodeRef={btnRef5}
                            selector="@next"
                            enterClassName="hidden"
                            enterActiveClassName="slidedown"
                            leaveToClassName="hidden"
                            leaveActiveClassName="slideup"
                          >
                            <a
                              ref={btnRef5}
                              className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                            >
                              <FaHotel className="react-icon" />
                              <span className="font-medium">Hotels</span>
                              <i className="pi pi-chevron-down ml-auto mr-1 react-icon"></i>
                              <Ripple />
                            </a>
                          </StyleClass>
                          <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li>
                              <Link
                                to="/Hotel"
                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                              >
                                <FaHouse className="react-icon" />
                                <span className="font-medium">Hotel</span>
                                <Ripple />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/RoomType"
                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                              >
                                <FaBed className="react-icon" />
                                <span className="font-medium">Room Type</span>
                                <Ripple />
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <StyleClass
                            nodeRef={btnRef6}
                            selector="@next"
                            enterClassName="hidden"
                            enterActiveClassName="slidedown"
                            leaveToClassName="hidden"
                            leaveActiveClassName="slideup"
                          >
                            <a
                              ref={btnRef6}
                              className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                            >
                              <FaHouseMedical className="react-icon" />
                              <span className="font-medium">Clinics </span>
                              <i className="pi pi-chevron-down ml-auto mr-1 react-icon"></i>
                              <Ripple />
                            </a>
                          </StyleClass>
                          <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li>
                              <Link
                                to="/Clinic"
                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                              >
                                <FaUserDoctor className="react-icon" />
                                <span className="font-medium">Clinic</span>
                                <Ripple />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/ClinicSpecialization"
                                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                              >
                                <FaHospitalUser className="react-icon" />
                                <span className="font-medium">
                                  Clinic Specialization
                                </span>
                                <Ripple />
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                  <a
                    v-ripple
                    className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                  >
                    <Avatar
                      image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                      shape="circle"
                    />
                    <span className="font-bold">Amy Eisner</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      ></Sidebar>
    </div>
  );
}
// {
/* 
      <Drawer
  PaperProps={{
    style: {
      position: "absolute"
    }
  }}
  variant="permanent"
  anchor="left"
  open={openDrawer}
></Drawer>

<Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      */
// }
