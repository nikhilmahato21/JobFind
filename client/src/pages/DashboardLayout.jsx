import Wrapper from "../assets/wrappers/Dashboard";
import BigSidebar from "../components/BigSidebar";
import Navbar from "../components/Navbar";
import SmallSidebar from "../components/SmallSidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
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
  );
};

export default DashboardLayout;
