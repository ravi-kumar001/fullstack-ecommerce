import React from "react";
import SideBar from "../../Components/Sidebar/SideBar";
import RightBar from "../../Components/RightBar/RightBar";

function Listing(props) {
  return (
    <section className="CategoryListing_Page">
      <div className="container">
        <div className="productListing d-flex">
          <SideBar />
          <div className="rightContent">
            <RightBar />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Listing;
