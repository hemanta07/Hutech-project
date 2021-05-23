import React, { Component } from "react";
import "./home.css";
class Home extends Component {
  render() {
    return (
      <div className="container-fluid  ">
        <div className=" leftDiv col-md-4">
          <div className="div1">
            <div className="logoBorder">
              <span className="logo1">LOGO</span>
            </div>
          </div>
          <div className="div2">
            <img src="img/group@2x.png" className="image" />
          </div>
          {/* --------------------------------------------------- */}
        </div>
        <div>
          <img src="img/bell.png" className="bell" />
          <h5>Help</h5>
        </div>
        <div className=" rightDiv col-md-8">
          <h3 className="heading"> Welcome to </h3>
          <h4>Con5 Online Ordering System.</h4>
          <div className="Money">
            <div><img src="img/packing-list.png" className="packinglist" /></div>
            <div> <img src="img/trolley.png" className="trolley1" /></div>
            <div><img src="img/boxes.png" className="box" /></div>
          </div>
          <div className="row3">
            <div className="Delivery">
              <img src="img/delivery.png" />
            </div>
            <div className="warehouse">
              <img src="img/warehouse.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
