import React from "react";
import "./DashboardPoolpage.scss";
import image from "../images/info.png";

import { Link } from "react-router-dom";
export default class DashboardPool extends React.Component {
  render() {
    return (
      <div className="dashboardpool">
        {/*ustdeki butonlar  start*/}
        <div className="threedivs">
          <Link to="/dashboard">
            <div className="threedivsitem">Plottinq</div>
          </Link>
          <Link to="/dashboardhotel">
            <div className="threedivsitem">Hotel</div>
          </Link>
          <div className="threedivsitem threedivsitem1">Pool</div>
        </div>
        {/*ustdeki butonlar finish*/}
        <div className="title">Pool</div>
        {/*6 dene qutu start*/}
        <div className="sixdivs">
          <div className="sixdivsitem">
            <div className="sixdivsitemtitle">0.417 TiB</div>
            <div className="sixdivsitemdivs">
              <div className="sixdivsitemdiv1">Təxmin edilən plot ölçüsü</div>
              <img src={image} alt="" />
            </div>
          </div>
          <div className="sixdivsitem">
            <div className="sixdivsitemtitle">0.001001</div>
            <div className="sixdivsitemdivs">
              <div className="sixdivsitemdiv1">Ödənməmiş XCH</div>
              <img src={image} alt="" />
            </div>
          </div>
          <div className="sixdivsitem">
            <div className="sixdivsitemtitle">0</div>
            <div className="sixdivsitemdivs">
              <div className="sixdivsitemdiv1">Toplam ödənilən XCH</div>
              <img src={image} alt="" />
            </div>
          </div>
          <div className="sixdivsitem">
            <div className="sixdivsitemtitle">1</div>
            <div className="sixdivsitemdivs">
              <div className="sixdivsitemdiv1">PPLNS Points</div>
              <img src={image} alt="" />
            </div>
          </div>
          <div className="sixdivsitem">
            <div className="sixdivsitemtitle">0</div>
            <div className="sixdivsitemdivs">
              <div className="sixdivsitemdiv1">Tapılmış blok sayı</div>
              <img src={image} alt="" />
            </div>
          </div>
          <div className="sixdivsitem">
            <div className="sixdivsitemtitle">0%</div>
            <div className="sixdivsitemdivs">
              <div className="sixdivsitemdiv1">Round Payınız</div>
              <img src={image} alt="" />
            </div>
          </div>
        </div>
        {/*6 dene qutu finish*/}
        <div className="diaqram">
          <div
            style={{
              height: "280px",
              border: "1px dashed #fff",
              marginRight: "3px"
            }}
          >
            {" "}
          </div>
          <div className=" diaqramitem diaqramitem1"></div>
          <div className=" diaqramitem diaqramitem2"></div>
          <div className=" diaqramitem diaqramitem3"></div>
          <div
            style={{
              height: "280px",
              border: "1px dashed #fff",
              marginRight: "3px"
            }}
          >
            {" "}
          </div>
          <div className=" diaqramitem diaqramitem4"></div>
          <div className=" diaqramitem diaqramitem5"></div>
          <div className=" diaqramitem diaqramitem6"></div>
          <div
            style={{
              height: "280px",
              border: "1px dashed #fff",
              marginRight: "3px"
            }}
          >
            {" "}
          </div>
          <div className=" diaqramitem diaqramitem7"></div>
          <div className=" diaqramitem diaqramitem8"></div>
          <div className=" diaqramitem diaqramitem9"></div>
          <div
            style={{
              height: "280px",
              border: "1px dashed #fff",
              marginRight: "3px"
            }}
          >
            {" "}
          </div>
          <div className=" diaqramitem diaqramitem10"></div>
          <div className=" diaqramitem diaqramitem11"></div>
          <div className=" diaqramitem diaqramitem12"></div>
          <div
            style={{
              height: "280px",
              border: "1px dashed #fff",
              marginRight: "3px"
            }}
          >
            {" "}
          </div>
          <div className=" diaqramitem diaqramitem13"></div>
          <div className=" diaqramitem diaqramitem14"></div>
          <div className=" diaqramitem diaqramitem15"></div>
          <div
            style={{
              height: "280px",
              border: "1px dashed #fff",
              marginRight: "3px"
            }}
          >
            {" "}
          </div>
          <div className=" diaqramitem diaqramitem16"></div>
          <div className=" diaqramitem diaqramitem17"></div>
          <div className=" diaqramitem diaqramitem18"></div>
        </div>
        <div className="estimated">Təxmini plot ölçüsü</div>
        <div className="divtext">
          Bu cədvəl,sadəcə sizin rahatlığınız üçün təqdim edilən təxminlərdir.
          Mükafatlar bu hesablamaya deyil, daha çox alınan hissələrə əsaslanır.
          Təxminlərin bəzən daha böyük sıçrayışlar və düşmələrlə orta hesabla
          +/- 20% ətrafında dəyişəcəyi gözlənilir.
          <br />
        </div>
      </div>
    );
  }
}
