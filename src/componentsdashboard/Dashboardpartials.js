import React from "react";
import "./Dashboardpartials.scss";
import DashboardPool from "./DashboardPoolpage";

import { Link } from "react-router-dom";
export default class DashboardPartial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          item1: "8/5/21, 4:28 PM",
          item2: "6418e76feb...",
          item3: "1",
          item4: "Etibarlı",
          item5: "0x98a63e7990f63fa606e1e9b2...."
        },
        {
          item1: "8/5/21, 4:28 PM",
          item2: "6418e76feb...",
          item3: "1",
          item4: "Etibarlı",
          item5: "0x98a63e7990f63fa606e1e9b2...."
        },
        {
          item1: "8/5/21, 4:28 PM",
          item2: "6418e76feb...",
          item3: "1",
          item4: "Etibarlı",
          item5: "0x98a63e7990f63fa606e1e9b2...."
        },
        {
          item1: "8/5/21, 4:28 PM",
          item2: "6418e76feb...",
          item3: "1",
          item4: "Etibarlı",
          item5: "0x98a63e7990f63fa606e1e9b2...."
        },
        {
          item1: "8/5/21, 4:28 PM",
          item2: "6418e76feb...",
          item3: "1",
          item4: "Etibarlı",
          item5: "0x98a63e7990f63fa606e1e9b2...."
        },
        {
          item1: "8/5/21, 4:28 PM",
          item2: "6418e76feb...",
          item3: "1",
          item4: "Etibarlı",
          item5: "0x98a63e7990f63fa606e1e9b2...."
        },
        {
          item1: "8/5/21, 4:28 PM",
          item2: "6418e76feb...",
          item3: "1",
          item4: "Etibarlı",
          item5: "0x98a63e7990f63fa606e1e9b2...."
        },
        {
          item1: "8/5/21, 4:28 PM",
          item2: "6418e76feb...",
          item3: "1",
          item4: "Etibarlı",
          item5: "0x98a63e7990f63fa606e1e9b2...."
        },
        {
          item1: "8/5/21, 4:28 PM",
          item2: "6418e76feb...",
          item3: "1",
          item4: "Etibarlı",
          item5: "0x98a63e7990f63fa606e1e9b2...."
        },
        {
          item1: "8/5/21, 4:28 PM",
          item2: "6418e76feb...",
          item3: "1",
          item4: "Etibarlı",
          item5: "0x98a63e7990f63fa606e1e9b2...."
        }
      ]
    };
  }

  render() {
    return (
      <div className="dashboardpartials">
        {/*altdaki butonlar  start*/}
        <div className="threedivs">
          <Link to="/dashboardpool">
            <div className="threedivsitem ">Mükafatlar</div>
          </Link>
          <Link to="/dashboardpartial">
            <div className="threedivsitem threedivsitem1">Hissələr</div>
          </Link>
          <Link to="/dashboardpayout">
            <div className="threedivsitem">Ödəmələr</div>
          </Link>
        </div>
        {/*altdaki butonlar  finish*/}
        <div className="title">
          7/30/21, 5:32 AM tarixindən etibarən, son 100 hissə
        </div>
        <div className="title1">Harvester’lər</div>

        {/* center table start*/}
        <div className="moneytable">
          <div className="setir">
            <div className="sutun sutun1  sutunheader">Harvester ID</div>
            <div className="sutun sutun2  sutunheader">Etibarlı</div>
            <div className="sutun sutun3  sutunheader">Etibarsız</div>
          </div>
          <div className="setir">
            <div className="sutun sutun1" id="sutun1">
              6418e76feb22b8bee5e8f52669f607686283c256b4364e2242c4469a5b8569d4
            </div>
            <div className="sutun sutun2  ">100</div>
            <div className="sutun sutun3  ">0</div>
          </div>
        </div>
        {/*center table finish*/}
        <div className="title3">Son Blok Payları</div>
        {/*block time table start*/}
        <div className="moneytable">
          <div className="setir">
            <div className="sutun sutun1 sutunheader ">Tarix/Zaman</div>
            <div className="sutun sutun2 sutunheader ">Harvester ID</div>
            <div className="sutun sutun3 sutunheader">Çətinlik</div>
            <div className="sutun sutun4 sutunheader ">Status</div>
            <div className="sutun sutun5 sutunheader ">Proof</div>
          </div>
          {this.state.items.map((item) => {
            return (
              <div className="setir">
                <div className="sutun sutun1">{item.item1}</div>
                <div className="sutun sutun2">{item.item2}</div>
                <div className="sutun sutun3">{item.item3}</div>
                <div className="sutun sutun4">{item.item4}</div>
                <div className="sutun sutun5">{item.item5}</div>
              </div>
            );
          })}
        </div>
        {/*block time table finish*/}
      </div>
    );
  }
}
