import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "./Navbar.scss";
import "./NewNavbar.scss";
import image1 from "../../images/c1.png";
import { Link, NavLink, withRouter } from "react-router-dom";
import $ from "jquery";
import { authActions } from "../../store/actions/auth.actions";

const Navbar = (props) => {
  const { auth } = props;
  const [user, setUser] = useState({ name: "" });
  //console.log("navbar.user.name:  " + user.name);

  useEffect(() => {
    if (auth.uid) {
      console.log("auth.uid.navbar:" + auth.uid);
      firebase
        .database()
        .ref(`users/${auth.uid}`)
        .once("value")
        .then((snapshot) => {
          setUser(snapshot.val());
          console.log("navbar" + snapshot.val());
        });
    }
  }, [auth]);

  $(function () {
    $(".fa-bars").click(function () {
      $(".sidebar").css({ visibility: "visible", right: "0%" });
    });
  });

  $(function () {
    $(".sidebar .fa-times").click(function () {
      $(".sidebar").css({ visibility: "hidden", right: "-60%" });
    });
  });
  /* dropdown function start */
  $(function () {
    $(".fa-user").mousemove(function () {
      $(".dropdownmenu").show();
    });
  });

  $(function () {
    $(".button").mouseleave(function () {
      $(".dropdownmenu").hide();
    });
  });
  /* dropdown function finish */

  return (
    <div className="navbar1">
      {auth.uid ? (
        <NavLink exact to="/home">
          <img src={image1} alt="" />
        </NavLink>
      ) : (
        <NavLink exact to="/">
          <img src={image1} alt="" />
        </NavLink>
      )}
      <div className="sidebar">
        <i className="fa fa-times"></i>
        <ul className="menu">
          <li>
            <NavLink to="/about">Haqqımızda</NavLink>
          </li>
          <li>
            <NavLink to="/services">Xidmətlər</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Bloq</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Əlaqə</NavLink>
          </li>
        </ul>
      </div>
      <div className="user-sidebar">
        <div className="button">
          <i class="fas fa-user"></i>
          <div className="dropdownmenu">
            <div className="username">Rauf Kərimli</div>
            <div className="dropdownmenuitems">
              <i class="fas fa-columns"></i>
              <span>Hesab paneli</span>
            </div>
            <div className="dropdownmenuitems">
              <i class="fas fa-cog"></i>
              <span>Tənzimləmələr</span>
            </div>
            <div className="dropdownmenuitems">
              <i class="fas fa-sign-out-alt"></i>
              <span>Çıxış</span>
            </div>
          </div>
        </div>
        <i className="fas fa-bars"></i>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(authActions.logOut())
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
