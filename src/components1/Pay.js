import React, { useState } from "react";
import "./Pay.scss";
//import image1 from "../images/cardvisa.png";

const Pay = () => {
  const [v, vSet] = useState();
  const [v1, v1Set] = useState();
  const [v2, v2Set] = useState();
  const [v3, v3Set] = useState();

  return (
    <div className="pay">
      <div className="div1">
        {/* <div className="cardvisa">
          <img
            src="https://www.money.az/media/2019/04/20/visa-electron.jpg"
            class="align-self-center"
            alt=""
          />
        </div> */}
        <div>
          <div className="cardvisaleft">
            <h1>Your Payment Details</h1>
            <br />
            <br />
            <div className="input-div">
              <label for="intext1" class="form-label">
                CardHolder Name
              </label>
              <input type="text" id="intext1" class="form-control" required />
            </div>
            <div className="input-div">
              <label for="intext1" class="form-label">
                Card Number
              </label>
              <input
                type="number"
                class="form-control"
                required
                onChange={(e) => vSet(e.target.value.slice(0, 16))}
                value={v}
              />
            </div>
            <div className="cvv">
              <div>
                <label for="intext1" class="form-label">
                  EXPIRATION DATE
                </label>
                <div className="date">
                  <input
                    type="number"
                    name="month"
                    placeholder="MM"
                    class="form-control"
                    style={{ width: "70px" }}
                    onChange={(e) => v2Set(e.target.value.slice(0, 2))}
                    value={v2}
                  />
                  <span
                    style={{
                      fontSize: "25px",
                      marginRight: "3px",
                      marginLeft: "3px"
                    }}
                  >
                    /
                  </span>
                  <input
                    type="number"
                    name="year"
                    placeholder="YY"
                    class="form-control"
                    style={{ width: "70px" }}
                    onChange={(e) => v3Set(e.target.value.slice(0, 2))}
                    value={v3}
                  />
                </div>
              </div>
              <div>
                <label for="intext1" class="form-label">
                  Cvv
                </label>
                <input
                  style={{ width: "60px" }}
                  type="number"
                  class="form-control"
                  required
                  onChange={(e) => v1Set(e.target.value.slice(0, 3))}
                  value={v1}
                />
              </div>
            </div>
            <button className="pay-now" type="submit">
              {" "}
              PAY NOW{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
