import React, { useEffect } from "react";
import "./Register.scss";
import { connect } from "react-redux";
import { authActions } from "../../store/actions";
import { Link, Redirect } from "react-router-dom";
import image from "../../images/c1.png";
import $ from "jquery";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e, auth) => {
    console.log("funksiya isledi clicklendi");
    e.preventDefault();
    this.setState({ submitted: true });
    /*const { inputEmail, inputPassword, displayName } = this.state;
    this.props.register({ inputEmail, inputPassword, displayName });*/
    this.props.history.push("/registerstep2");
  };

  render() {
    $(document).ready(function () {
      $("#inputPassword").on({
        keyup: function pasfunc() {
          if ($(this).val().length < 10) {
            $(this).css("border", "#dc3545 solid 1px ");
            $("#valid-feedback1").css("display", "none");
            $("#invalid-feedback1").css("display", "block");

            $(this).addClass("is-invalid");
            $("#button1").attr("disabled", "true");
          } else {
            $(this).css("border", "#28a745 solid 1px ");
            $("#valid-feedback1").css("display", "block");
            $("#invalid-feedback1").css("display", "none");
            $(this).removeClass("is-invalid");
            $(this).addClass("is-valid");
            $("#button1").removeAttr("disabled");
          }
        }
      });
    });

    $(document).ready(function () {
      $("#confirmpassword").on({
        keyup: function pasfunc() {
          if ($(this).val() != $("#inputPassword").val()) {
            $(this).css("border", "#dc3545 solid 1px ");
            $("#valid-feedback0").css("display", "none");
            $("#invalid-feedback0").css("display", "block");
            $(this).addClass("is-invalid");
            $("#button1").attr("disabled", "true");
          } else {
            $(this).css("border", "#28a745 solid 1px ");
            $("#valid-feedback0").css("display", "block");
            $("#invalid-feedback0").css("display", "none");
            $(this).removeClass("is-invalid");
            $(this).addClass("is-valid");
            $("#button1").removeAttr("disabled");
          }
        }
      });
    });

    return (
      <React.Fragment>
        <Navbar />
        <div className="signup">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="steps">
              <span
                style={{
                  fontSize: "30px",
                  marginRight: "25px",
                  fontWeight: "600"
                }}
              >
                Addım 1
              </span>
              <span className="step2" style={{ fontSize: "25px" }}>
                Addım 2
              </span>
            </div>
            <div className="inputs">
              <div className="around">
                <label htmlFor="intext1" className="form-label">
                  Ad
                </label>
                <input
                  type="text"
                  id="displayName"
                  className="form-control"
                  required
                  autoFocus=""
                  onChange={this.handleChange}
                />
              </div>

              <div className="around">
                <label htmlFor="intext1" className="form-label">
                  Soyad
                </label>
                <input
                  type="text"
                  id="displayLastName"
                  className="form-control"
                  required
                  autoFocus=""
                  onChange={this.handleChange}
                />
              </div>

              <div className="around aroundp">
                <label htmlFor="pass1" className="form-label">
                  Şifrə
                </label>
                <input
                  type="password"
                  id="inputPassword"
                  className="form-control"
                  required
                  onChange={this.handleChange}
                />
              </div>

              <div className="around aroundp">
                <label htmlFor="pass1" className="form-label">
                  Şifrə Təsdiqi
                </label>
                <input
                  type="password"
                  id="confirmpassword"
                  className="form-control"
                  required
                  onChange={this.handleChange}
                />
              </div>

              <div className="around">
                <label htmlFor="intext5" className="form-label">
                  E-poçt ünvanı
                </label>

                <input
                  type="text"
                  id="inputEmail"
                  className="form-control"
                  required
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="buttons01">
              <Link to="/loginregister">
                <button type="submit" id="button0">
                  Geriyə
                </button>{" "}
              </Link>

              <button type="submit" id="button1">
                Növbəti
              </button>
            </div>
          </form>
          <div className="already">
            <span> Hesabınız var? </span>
            <Link to="/login" style={{ color: "#3AAC59", fontWeight: "800" }}>
              {" "}
              Daxil ol
            </Link>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (creds) => dispatch(authActions.register(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
