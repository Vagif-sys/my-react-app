import React from "react";
import "./Dashboardrewards.scss";

import { Link } from "react-router-dom";
export default class DashboardReward extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          item1: "670965",
          item2: " 8/5/21, 7:59 AM",
          item3: "0.0000001",
          item4: "0.0000%"
        },
        {
          item1: "670965",
          item2: " 8/5/21, 7:59 AM",
          item3: "0.0000001",
          item4: "0.0000%"
        },
        {
          item1: "670965",
          item2: " 8/5/21, 7:59 AM",
          item3: "0.0000001",
          item4: "0.0000%"
        },
        {
          item1: "670965",
          item2: " 8/5/21, 7:59 AM",
          item3: "0.0000001",
          item4: "0.0000%"
        },
        {
          item1: "670965",
          item2: " 8/5/21, 7:59 AM",
          item3: "0.0000001",
          item4: "0.0000%"
        },
        {
          item1: "670965",
          item2: " 8/5/21, 7:59 AM",
          item3: "0.0000001",
          item4: "0.0000%"
        }
      ],
      items1: [
        {
          item1: "Son 12 saat",
          item2: "0.000005",
          item3: "$0.00",
          item4: "€0.00"
        },
        {
          item1: "Son 24 saat",
          item2: "0.000004",
          item3: "$0.10",
          item4: "€0.00"
        },
        {
          item1: "Bu Gün",
          item2: "0.0000042",
          item3: "$0.00",
          item4: "€0.00"
        },
        {
          item1: "Dünən",
          item2: "0.0000043",
          item3: "$0.00",
          item4: "€0.00"
        }
      ]
    };
  }
  render() {
    return (
      <div className="dashboardrewards">
        {/*altdaki butonlar  start*/}
        <div className="threedivs">
          <Link to="/dashboardpool">
            <div className="threedivsitem threedivsitem1">Mükafatlar</div>
          </Link>
          <Link to="/dashboardpartial">
            <div className="threedivsitem">Hissələr</div>
          </Link>
          <Link to="/dashboardpayout">
            <div className="threedivsitem">Ödəmələr</div>
          </Link>
        </div>
        {/*altdaki butonlar  finish*/}

        <div className="reward">Sizin Mükafatlar</div>
        {/*money table start*/}
        <div className="moneytable">
          <div className="setir">
            <div className="sutun sutun1 sutunheader">Dövr</div>
            <div className="sutun sutun2 sutunheader">XCH</div>
            <div className="sutun sutun3 sutunheader">USD</div>
            <div className="sutun sutun4 sutunheader">EUR</div>
          </div>
          {this.state.items1.map((item) => {
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

        {/*money table finish*/}
        <div className="reward">Son Blok Payları</div>

        {/*block time table start*/}
        <div className="moneytable">
          <div className="setir">
            <div className="sutun sutun1 sutunheader">Blok #</div>
            <div className="sutun sutun2 sutunheader">Tarix/Zaman</div>
            <div className="sutun sutun3 sutunheader">Mükafat</div>
            <div className="sutun sutun4 sutunheader">Sizin Pay</div>
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
