import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const logIn = (user) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(user.inputEmail, user.inputPassword)
      .then(() => dispatch({ type: "LOGIN_SUCCESS" }))
      .catch((error) => dispatch({ type: "LOGIN_ERROR", error }));
  };
};

const logOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      })
      .catch((error) => {
        dispatch({ type: "LOGOUT_ERROR" }, error);
      });
  };
};

const register = (user) => {
  return (dispatch, getState, { getFirebase }) => {
    const db = firebase.database();
    const firebase1 = getFirebase();
    firebase1
      .auth()
      .createUserWithEmailAndPassword(user.inputEmail, user.inputPassword)
      .then((cred) => {
        dispatch({ type: "REGISTER_SUCCESS" });
        db.ref(`users/${cred.user.uid}`).set({
          name: user.displayName,
          lastname: user.displayLastName
        });
        console.log("user.uid:", cred.user.uid); // I added user
      })
      .catch((error) => dispatch({ type: "REGISTER_ERROR", error }));
  };
};

export const authActions = {
  logIn,
  logOut,
  register
};
