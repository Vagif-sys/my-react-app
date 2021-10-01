import React from "react";
import Content1 from "../components/Content1";
import Content2 from "../components/Content2";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import { NavLink, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { authActions } from "../store/actions";

class MotherHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
  }
  render() {
    const { auth, authError } = this.props;
    let { from } = this.props.location || { from: { pathname: "/home" } };

    if (auth.uid) return <Redirect to={from} />;
    return (
      <div className="motherHome">
        <Navbar />
        <Content1 />
        <Content2 />
        <Footer />
      </div>
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
    logIn: (creds) => dispatch(authActions.logIn(creds)),
    logInWithGoogle: () => dispatch(authActions.logInWithGoogle())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MotherHome);
