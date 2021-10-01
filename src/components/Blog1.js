import React from "react";
import "./all.css";
import "./Blog.scss";

export default class Blog1 extends React.Component {
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
                      Chia.Az,Chia PLOT xidmətini aktivləşdirdi.
                    </div>
                    <div class="preview col-md-10">
                      Chia.Az Chia farminq ilə məşğul olan və olmaq istəyən
                      istifadəçilərə Chia PLOT xidmətini aktivləşdirdi. Bu
                      xidmətdən istifadə etmək üçün, istifadəçilər sadəcə saytda
                      qeydiyyatdan keçib, gərəkli xanaları doldurub PLOT alış
                      xidmətini reallaşdıra bilərlər.
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
