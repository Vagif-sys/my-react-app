import React from "react";
import "./Blog.scss";
import "./all.css";
import { Link, NavLink, withRouter } from "react-router-dom";
export default class Send extends React.Component {
  render() {
    return (
      <div className="blog">
        <div class="blog-page">
          <div class="container">
            <div class="row"></div>
            <div class="row">
              <div class="col-12">
                <div class="post d-flex first-of-year">
                  <div class="year"></div>
                  <a class="content">
                    <Link to="Chia.Az/,/Chia/PLOT/xidmətini/aktivləşdirdi">
                      {" "}
                      <div class="headline">
                        Chia.Az,Chia PLOT xidmətini aktivləşdirdi.
                      </div>{" "}
                    </Link>
                    <div class="date">13 Iyul, 2021</div>

                    <div class="preview">
                      Chia.Az Chia farminq ilə məşğul olan və olmaq istəyən
                      istifadəçilərə Chia PLOT xidmətini aktivləşdirdi. Bu
                      xidmətdən istifadə etmək üçün, istifadəçilər sadəcə saytda
                      qeydiyyatdan keçib, gərəkli xanaları doldurub PLOT alış
                      xidmətini reallaşdıra bilərlər.
                    </div>
                  </a>
                </div>

                <div class="post d-flex">
                  <div class="year"></div>
                  <a class="content">
                    <Link to="/Chia.AZ/3/istiqamətdə/xidmət/verməyə/hazırlaşır">
                      {" "}
                      <div class="headline">
                        Chia.AZ 3 istiqamətdə xidmət verməyə hazırlaşır.
                      </div>{" "}
                    </Link>
                    <div class="date">9 Iyul</div>

                    <div class="preview">
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
