import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Checkout.scss";
import image from "../images/chiat.png";
import $ from "jquery";
import image1 from "../images/maestro.png";
import image2 from "../images/visac.png";
import image3 from "../images/metamask.png";
import image4 from "../images/c1.png";
import image5 from "../images/plus.png";
import image6 from "../images/minus.png";
const Checkout = () => {
  const [number, setNumber] = useState(1);
  console.log(number);

  $(function () {
    if (number == 0) {
      /* $("#minus").attr("disabled", true);
    } else $("#minus").removeAttr("disabled");*/
      $("#minus").hide();
    } else {
      $("#minus").show();
    }
  });

  $(function () {
    $(".circle1").click(function () {
      $(".check1").show();
      $(".circle1").css("border", "1px solid #3AAC59");
      $(".circle2").css("border", "1px solid white");
      $(".check2").hide();
    });
  });

  $(function () {
    $(".circle2").click(function () {
      $(".check2").show();
      $(".circle2").css("border", "1px solid #3AAC59");
      $(".circle1").css("border", "1px solid white");
      $(".check1").hide();
    });
  });
  return (
    <div className="checkout">
      <img
        src={image4}
        width="200px"
        height="77px"
        style={{ marginBottom: "61px" }}
        alt=""
      />
      <div className="general-div">
        <div className="left">
          <div className="leftdiv">
            <div className="colx">
              <div class="colx1">Product</div>
              <div class="colx2">Price</div>
              <div class="colx3">Quantity</div>
              <div class="colx4">Total Price</div>
            </div>
            <div className="col3">
              <div class="ab1">
                <img src={image} alt="" />
                Chia K-32 Plot
              </div>
              <span class="ab2">$1.00</span>
              <div className="calc">
                <button id="minus" onClick={() => setNumber(number - 1)}>
                  <img
                    src={image6}
                    style={{ marginLeft: "-2.5px", marginTop: "-0.8px" }}
                    alt=""
                  />
                </button>
                <div>{number}</div>
                <div id="plus" onClick={() => setNumber(number + 1)}>
                  <img
                    src={image5}
                    style={{ marginLeft: "-3.5px", marginTop: "-0.8px" }}
                    alt=""
                  />
                </div>
              </div>
              <div class="ab3">${number}.00</div>
            </div>
          </div>
          <div className="rightx">
            <span
              style={{
                fontSize: "22px",
                padding: "19px 0px 0px 30px",
                fontWeight: "bold"
              }}
            >
              {" "}
              Payment Options{" "}
            </span>
            <div className="div1">
              <div className="circle circle1">
                <div className="check1"></div>
              </div>
              <div
                className="xy"
                style={{ width: "100%", marginRight: "25px" }}
              >
                Credit / Debit Card
                <br />
                We support Mastercard, Visa, Discover.
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img src={image1} alt="" style={{ marginBottom: "8px" }} />
                <img src={image2} alt="" style={{ marginTop: "3px" }} />
              </div>
            </div>
            <div className="div1">
              <div className="circle circle2">
                <div className="check2"></div>
              </div>
              <div
                className="xy"
                style={{ width: "100%", marginRight: "25px" }}
              >
                Metamask wallet
              </div>
              <div>
                <img src={image3} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="rparent">
          <div className="right">
            <div className="div1">
              <div className="x x1">Order Summary</div>
              <div className="x x2">
                K-32 chia plots <div>x1</div>
              </div>
              <div className="x x3">
                Plotting time: 8 hours Start time: immediate Download retention:
                5 days Download speed: 1 Gb/s
              </div>
              <div className="x x4">
                Sub Total <div style={{ color: "white" }}>${number}.00</div>
              </div>
              <div className="x x5">
                Discount <div style={{ color: "white" }}>-</div>
              </div>
              <div className="line"></div>
              <div className="x x6">
                Total <div>${number}.00</div>
              </div>
            </div>
          </div>
          <Link to="/pay">
            <button type="button" id="cbutton">
              Check Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
