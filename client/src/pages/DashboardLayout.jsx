import { createContext, useContext, useState } from "react";
import Wrapper from "../assets/wrappers/Dashboard";
import BigSidebar from "../components/BigSidebar";
import Navbar from "../components/Navbar";
import SmallSidebar from "../components/SmallSidebar";
import { Outlet } from "react-router-dom";

const DashboardContext = createContext();

const DashboardLayout = () => {
  const user = { name: "nik" };
  const [showSideBar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log("toggle dark theme");
  };
  const toggleSidebar = () => {
    setShowSidebar(!showSideBar);
  };

  const logoutUser = async () => {
    console.log("logout user");
  };

  return (
    <DashboardContext.Provider
      value={{ user, showSideBar, isDarkTheme, toggleDarkTheme, toggleSidebar }}
    >
      <Wrapper>
        <main className="dasboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dasboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
