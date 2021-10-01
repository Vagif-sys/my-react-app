import React from "react";
import "./Login.scss";
import image from "../../images/c1.png";
/*import { connect } from "react-redux";
import { authActions } from "../../store/actions";*/
import { Link, Redirect } from "react-router-dom";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
  }

  /* handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    this.props.history.push("/dashboard");
    const { inputEmail, inputPassword } = this.state;
    this.props.logIn({ inputEmail, inputPassword });
  };

  logInWithGoogle = () => {
    this.props.logInWithGoogle();
  };*/

  render() {
    /*const { auth, authError } = this.props;
    let { from } = this.props.location.state || { from: { pathname: "/home" } };

    if (auth.uid) return <Redirect to={from} />;*/
    return (
      <React.Fragment>
        <Navbar />
        <div className="login">
          <Link to="/">
            <img src={image} alt="" />
          </Link>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
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

            <div className="around">
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
            <span> Şifrəni unutmusunuz?</span>
            <div className="buttonsdiv">
              <Link to="/dashboard">
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
          </form>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

/*const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (creds) => dispatch(authActions.logIn(creds)),
    logInWithGoogle: () => dispatch(authActions.logInWithGoogle())
  };
};*/

export default /*connect(mapStateToProps, mapDispatchToProps)*/ Login;
