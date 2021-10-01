import React from "react";
import "./DashboardHotelpage.scss";
import { Link } from "react-router-dom";
export default class DashboardHotel extends React.Component {
  render() {
    return (
      <div className="dashboardhotel">
        {/*ustdeki butonlar  start*/}
        <div className="threedivs">
          <Link to="/dashboard">
            <div className="threedivsitem">Plottinq</div>
          </Link>
          <div className="threedivsitem threedivsitem1">Hotel</div>
          <Link to="/dashboardpool">
            <div className="threedivsitem">Pool</div>
          </Link>
        </div>
        {/*ustdeki butonlar finish*/}
        <div className="textbox">
          <span className="span1">Plot Statusu</span>
          <span className="span2">Sizin plot hazırlanır - 50%</span>
        </div>
        <div className="textbox">
          <span className="span1">Tapılan blok sayı </span>
          <span className="span2" style={{ fontSize: "50px" }}>
            0
          </span>
        </div>
      </div>
    );
  }
}
