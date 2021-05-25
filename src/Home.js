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
        </div>
        <div className="div12">
          <div className="bell">
            <img src="img/bell.png" />
          </div>
         
          <div>
            <p>
              <span className="help">Help</span>
            </p>
          </div>
          <div><span className="line">|</span></div>
          <div>
            <p><span className="bradanWright">Bradan Wright</span></p>
          </div>

          <div className="br">
            <span>BR</span>
            </div>
        </div>
        <div className=" rightDiv col-md-8">
          <h3 className="heading "> Welcome to </h3>
          <h4>Con5 Online Ordering System.</h4>

          <div className="row4">
            <div className="packinglist">
              <img src="img/packing-list.png" />
              <span className="place">PLACE AN ORDER</span>
            </div>

            <div className="trolley1">
              <img src="img/trolley.png" />
              <span className="MY-ORDER">MY ORDER</span>
            </div>
            <div className="box">
              <img src="img/boxes.png" />
              <span className="INVENTORY">INVENTORY</span>
            </div>
          </div>

          <div className="row5">
            <div className="RECTANGLE">
              <img src="img/delivery.png" />
              <span className="On-site-Delivery">On Site Delivery</span>
            </div>
            <div className="RECTANGLE2">
              <img src="img/warehouse.png" />
              <span className="Return"> Return</span>
            </div>
          </div>
          <div>
          <div>
            <button className="btn btn-primary">Continue Shopping</button>
          </div>
          <div className="arrow">
            <span><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
          </div>
          </div>

          <footer className="footer1 ">
            <p>
              <span className="footerline">
                Con-5 @ Online Ordering system 2019
              </span>
            </p>
          </footer>
        </div>
      </div>
    );
  }
}
export default Home;
