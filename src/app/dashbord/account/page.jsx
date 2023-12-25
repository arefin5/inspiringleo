"use client"
import SideNavbar from "@/app/component/SideNavbar";
import CreateBlog from '../../component/createBlog';
import Foter from "@/app/component/Foter";
import ChartComponent from "@/app/component/ChartComponent";
import ChartTable from "@/app/component/ChartTable";

const Account = () => {
  return (
    <>
      <div className="d-flex">
      <SideNavbar />
      <div className="w-75" style={{ marginLeft: 'auto' }}>
          <ChartComponent />
      </div>
    </div>
    <Foter/>
    </>
  );
};

export default Account;
