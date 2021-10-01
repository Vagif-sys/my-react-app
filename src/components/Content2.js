import React from "react";
import "./Content2.css";
import "./Content2.scss";
import image1 from "../images/y.png";
import image2 from "../images/hotel.png";
import image3 from "../images/swimming.png";
import image5 from "../images/hotel.png";
import image4 from "../images/plot.png";
import image6 from "../images/POOL.png";

export default class Content2 extends React.Component {
  render() {
    return (
      <div className="content2">
        <div className="title">
          Chia farminq edən istifadəçilərə xidmət göstərən Chia.az’ın,
          istifadəçilərin farminq etmələrini asanlaşdıracaq xidmətləri 3
          istiqamətdə gerçəkləşdirilir. Xidmət istiqamətlərini sıralayası olsaq
        </div>
        <div className="layout">
          <div className="layoutitem">
            <img src={image4} alt="" style={{ height: "150px" }} />
            <div className="text">
              <div className="textheader"> Chia PLOT</div>
              <div className="textcontent">
                Plottinq üçün, avadanlıq xərclərinizi minimala endirir və bu gün
                üçün ən sürətli Samsung 980 PRO SSD ilə SSD riskini öz üzərimizə
                götürürük. Durmadan genişlənən şəbəkədə qazanma şansınınızı
                artırmaq üçün tələsin.
              </div>
            </div>
          </div>
          <div className="layoutitem">
            <img src={image5} alt="" />
            <div className="text">
              <div className="textheader"> Chia HOTEL</div>
              <div className="textcontent">
                Bu xidmət ilə, sizi enerji, avadanlıq, avadanlıq baxım
                xərclərindən azad edirik və hətda HDD baxımınızı biz üstlənirik.
                7/24 plottinq və farminqin fasiləsiz davam etməsi ilə yanaşı,
                mütəxəssizlərimiz də 7/24 sizə dəstək xidməti verəcəklər.
              </div>
            </div>
          </div>
          <div className="layoutitem">
            <img src={image6} alt="" style={{ height: "133px" }} />
            <div className="text">
              <div className="textheader">Chia POOL </div>
              <div className="textcontent">
                POOL xidmətimiz , öz plot’u ilə hovuza qoşulmaq və gündəlik
                gəlir əldə etmək istəyən istifadəçilər üçün uyğun seçimdir. Bu
                xidmətdən istifadə edərək, gündəlik stabil gəlir əldə edə bilər
                və işinizi şansa buraxmamış olarsınız.
              </div>
            </div>
          </div>
        </div>
        <div className="footer1">
          <div className="textheader">Vaxt itirməyin!</div>
          <div className="textcontent">
            Onuda qeyd edək ki, Chia farminq ilə məşğul olmaq haqqında
            düşünürsünüzsə vaxt itirmədən başlamağınız sizin üçün doğru seçim
            ola bilər. Səbəbinə gəldikdə isə, hər keçən gün şəbəkə böyüyür və
            şəbəkənin böyüməsinə düz mütənasib olaraq, mayninq dahada
            çətinləşir.
          </div>
        </div>
      </div>
    );
  }
}
