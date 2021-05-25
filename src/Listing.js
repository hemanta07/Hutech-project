import React, { Component } from "react";
import "./listing.css";
class Listing extends Component {
  render() {
    return (
      <div className="container bg-black mt-5 pl-4">
        <div className="row">
          <div className="col-md-2  mainDiv border bg-red">
            <div className="Logo23">LOGO</div>
            <div className="RectAngle">
              <img src="img/packing-list.png" />
              <span className="place">PLACE AN ORDER</span>
            </div>

            <div className="trolley2">
              <img src="img/trolley.png" />
              <span className="order">MY ORDER</span>
            </div>
            <div className="box1">
              <img src="img/boxes.png" />
              <span className="INVENTORY2">INVENTORY</span>
            </div>
          </div>
          {/* -------------------------------------- */}
          <div className="col-md-10 row2">
            <div>
              <img src="img/rectangle-839.png" className="Rectangle-Copy-2 " />
            </div>
            <div>
              <img src="img/page-1.png" className="Page-1"/>
            </div>
            <div>
              <p>
                <span className="My-Address-Southban">
                  <b>My Adress:</b> <br />
                  South Bank Great Wilson St.Leeds Ls115Ad,UK
                </span>
              </p>
            </div>
           
        <div>
          
            <img src="img/bell.png"  className="Bell-icon"/>
          </div>
        
          <div>
            <p>
              <span className="Help">Help</span>
            </p>
          </div>
          <div><span className="Line">|</span></div>
          <div>
            <p><span className="BrandanWrigh">Bradan Wright</span></p>
          </div>

          <div className="br">
            <span>BR</span>
            </div>
        
    
        </div>
        </div>
      </div>
    );
  }
}
export default Listing;
