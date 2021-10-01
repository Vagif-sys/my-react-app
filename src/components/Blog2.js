import React from "react";
// import "./Blog.scss";
import "./all.css";
import "./Blog2.scss";
export default class Blog2 extends React.Component {
  render() {
    return (
      <div
        className="blog d-flex justify-content-center align-items-center "
        style={{
          paddingLeft: "0px",
          paddingRight: "0px"
        }}
      >
        <div class="blog-page">
          <div class="container">
            <div class="row">
              <div class="col-12"></div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="post d-flex first-of-year">
                  <a class="content">
                    <div class="headline col-md-10">
                      Chia.AZ 3 istiqamətdə xidmət verməyə hazırlaşır.
                    </div>
                    <div class="preview col-md-10">
                      Chia.az Chia farminq fəaliyyəti ilə məşğul olan
                      istifadəçilərin farminq prosesini rahatlaşdırmaq üçün, 3
                      istiqamətdə xidmət verməyə hazırlaşır. PLOT, HOTEL və POOL
                      olaraq təqdim olunacaq xidmətlər müxtəlifi stifadəçilərin
                      problemlərinə fokuslanmış həllər olaraq təqdimediləcəkdir.
                      İlkin olaraq PLOT xidmətinin təqdim olunmasını
                      planlaşdıran Chia.AZ qısa zaman ərzində digər
                      xidmətlərinidə aktivləşdirəcəkdir.
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
