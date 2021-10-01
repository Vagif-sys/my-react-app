import React from "react";
import "./LoginRegister.scss";
import image from "../../images/c1.png";
import { Link } from "react-router-dom";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
export default class LoginRegister extends React.Component {
  render() {
    return (
      <div className="loginregister">
        <span>Xoş Gəlmişsiniz</span>
        <Link to="/login">
          <button type="button" className="buttons loginbutton">
            DAXİL OL
          </button>
        </Link>
        <Link to="/register">
          <button type="button" className="buttons signupbutton">
            QEYDİYYAT
          </button>
        </Link>
      </div>
    );
  }
}
