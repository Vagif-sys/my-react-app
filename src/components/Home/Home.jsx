import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import ChiaAPI from "./components/ChiaAPI.js";

const Home = (props) => {
  const { auth } = props;
  const [user, setUser] = useState("");
  //console.log("home.user.name:  " + user.name);

  useEffect(() => {
    console.log("auth.uid.home:" + auth.uid);
    firebase
      .database()
      .ref(`users/${auth.uid}`)
      .once("value")
      .then(async (snapshot) => {
        await setUser(snapshot.val());
        console.log("home" + snapshot.val());
      });
  }, []);

  return (
    <React.Fragment>
      <ChiaAPI />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Home);
