import React from "react";
import "./Content1.scss";
import { Link } from "react-router-dom";
import "./Content2.css";

export default class Content1 extends React.Component {
  render() {
    return (
      <div className="content1">
        <div class="tc">
          <div className="title">
            Chia farminqlə daha rahat necə
            <br /> məşğul ola biləcəyiniz haqqındamı
            <br /> düşünürsünüz?
          </div>
          <Link to="/checkout">
            <button>Rahata Keç</button>
          </Link>
        </div>
      </div>
    );
  }
}
