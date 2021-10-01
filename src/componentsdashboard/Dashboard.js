import React from "react";
import "./Dashboard.scss";
import image1 from "../images/c1.png";
import { Link } from "react-router-dom";
export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        {/*ustdeki butonlar  start*/}
        <div className="threedivs">
          <div className="threedivsitem threedivsitem1 ">Plottinq</div>
          <Link to="/dashboardhotel">
            <div className="threedivsitem">Hotel</div>
          </Link>
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
          <span className="span1">Plot Linki</span>
          <span className="span2">
            https://www.tradingview.com/markets/currencies/cross-rates-overview-heat-map/
          </span>
        </div>
      </div>
    );
  }
}
