import React from "react";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import "./Services.scss";
import { Link } from "react-router-dom";
export default class Services extends React.Component {
  render() {
    return (
      <div className="services">
        <span>XİDMƏTLƏR</span>
        <div className="layout">
          {/* <img src={image3} alt="" style={{ marginRight: "40px" }} /> */}
          <div className="img1"></div>
          <div className="layoutdiv conten1">
            <div className="title">Plot</div>
            <div className="content">
              Chia PLOT xidmətindən istifadə etmək, sizi əsasən böyük xərclədən
              azad edir. Bu xərclərə örnək verməli olsaq - əlavə və yüksək
              məbləğli komputer avadanlığı alışı, mütəmadi olaraq yenilənməli
              olan SSD alışı və digər xərclərdir. Həmçinin qeyd edək ki,
              Chia.az, plot üçün bazardakı ən sürətli SSD olan, Samsung 980 Pro
              SSD’lərindən istifadə edir.
              <br />
              <br />
            </div>
            <Link to="checkout">
              <button type="button">Sifariş Ver </button>
            </Link>
          </div>
          <div className="layoutdiv conten2">
            <div className="title">Hotel </div>
            <div className="content">
              Chia HOTEL xidməti aldığınızda isə sizdən tələb olunan yalnız
              HDD’nizi bizə təqdim etmənizdir. Bu xidməti çərçivəsində, əldə
              edəcəyiniz üstünlüklər isə: farminq üçün sərf edəcəyiniz enerji və
              avadanlıq xərclərindən azad olmanız, həmçinin, təqdim etdiyiniz
              HDD texniki baxımını bizim üstlənməmizdir. 7/24 fasiləsiz
              mütəxəssis dəstəyi, farminq və plottinq.
              <br />
              <br />
              <div
                style={{
                  color: "black",
                  letterSpacing: "0.04em",
                  fontFamily: "'Noto Sans', sans-serif"
                }}
              ></div>
            </div>
            <button type="button">Sifariş Ver </button>
          </div>

          <div className="img3"></div>

          <div className="img2"></div>
          <div className="layoutdiv conten3">
            <div className="title">Pool</div>
            <div className="content">
              Chia POOL xidmətimiz isə öz plot’u ilə hovuza qoşulmaq və gündəlik
              gəlir əldə etmək istəyən istifadəçilər üçün uyğun seçimdir. Günlük
              olaraq digər istifadəçilər tərəfindən qazanılan və paylaşılan
              gəlir, sizin də günlük müxtəlif məbləğlərdə gəlir əldə etmənizə
              imkan yaradır. Bu xidmətdən istifadə edərək gündəlik stabil gəlir
              əldə edə bilərsiniz.
            </div>
            <button type="button">Sifariş Ver </button>
          </div>
        </div>
      </div>
    );
  }
}
