import React from "react";
import "./Dashboardpayouts.scss";

import { Link } from "react-router-dom";
export default class DashboardPayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          item1: "8/5/21, 7:59 AM",
          item2: " Təsdiqlənmiş",
          item3: "0.00000013885",
          item4: "$25"
        },
        {
          item1: "8/5/21, 7:59 AM",
          item2: " Təsdiqlənmiş",
          item3: "0.00000013885",
          item4: "$25"
        },
        {
          item1: "8/5/21, 7:59 AM",
          item2: " Təsdiqlənmiş",
          item3: "0.00000013885",
          item4: "$25"
        },
        {
          item1: "8/5/21, 7:59 AM",
          item2: " Təsdiqlənmiş",
          item3: "0.00000013885",
          item4: "$25"
        },
        {
          item1: "8/5/21, 7:59 AM",
          item2: " Təsdiqlənmiş",
          item3: "0.00000013885",
          item4: "$25"
        },
        {
          item1: "8/5/21, 7:59 AM",
          item2: " Təsdiqlənmiş",
          item3: "0.00000013885",
          item4: "$25"
        },
        {
          item1: "8/5/21, 7:59 AM",
          item2: " Təsdiqlənmiş",
          item3: "0.00000013885",
          item4: "$25"
        }
      ]
    };
  }
  render() {
    return (
      <div className="dashboardpayout">
        {/*altdaki butonlar  start*/}
        <div className="threedivs">
          <Link to="/dashboardpool">
            <div className="threedivsitem">Mükafatlar</div>
          </Link>
          <Link to="/dashboardpartial">
            <div className="threedivsitem">Hissələr</div>
          </Link>
          <Link to="/dashboardpayout">
            <div className="threedivsitem threedivsitem1">Ödəmələr</div>
          </Link>
        </div>
        {/*altdaki butonlar  finish*/}
        <div className="title">Minimum ödəniş məbləği: 0.01 XCH</div>

        <div className="withdrawdiv">
          <span>Cüzdan Adresi</span>
          <div className="ib">
            <input type="text" className="form-control" />
            <button type="submit">KÖÇÜRT</button>
          </div>
        </div>

        {/*block time table start*/}
        <div className="moneytable">
          <div className="setir">
            <div className="sutun sutunheader sutun1">Tarix/Zaman</div>
            <div className="sutun sutunheader sutun2">Təsdiqlənmiş</div>
            <div className="sutun sutunheader sutun3">Koin ID</div>
            <div className="sutun sutunheader sutun4">Məbləğ</div>
          </div>
          {this.state.items.map((item) => {
            return (
              <div className="setir">
                <div className="sutun sutun1">{item.item1}</div>
                <div className="sutun sutun2">{item.item2}</div>
                <div className="sutun sutun3">{item.item3}</div>
                <div className="sutun sutun4">{item.item4}</div>
              </div>
            );
          })}
        </div>
        {/*block time table finish*/}
      </div>
    );
  }
}
