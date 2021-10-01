import React, { useEffect } from "react";
import "./RegisterStep2.scss";
import { connect } from "react-redux";
import { authActions } from "../../store/actions";
import { Link, Redirect } from "react-router-dom";
import image from "../../images/iconi.png";
import $ from "jquery";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";

class RegisterStep2 extends React.Component {
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
    console.log("okay:  " + auth);
    e.preventDefault();
    this.setState({ submitted: true });
    const { farmpubkey, poolpubkey } = this.state;
    //const { uid } = auth.uid;
    //console.log("okay:  " + uid);
    this.props.register({ farmpubkey, poolpubkey });
  };

  render() {
    /* const { auth, authError } = this.props;
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    if (auth.uid) return <Redirect to={from} />;*/
    return (
      <React.Fragment>
        <Navbar />
        <div className="registerstep2">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="steps">
              <span
                className="step1"
                style={{ fontSize: "25px", marginRight: "25px" }}
              >
                Addım 1
              </span>
              <span style={{ fontSize: "30px", fontWeight: "600" }}>
                Addım 2
              </span>
            </div>

            <div className="around">
              <label htmlFor="intext1" className="form-label">
                Farm pubkey
              </label>
              <input
                type="text"
                id="farmpubkey"
                className="form-control"
                required
                autoFocus=""
                onChange={this.handleChange}
              />
            </div>

            <div className="around">
              <label htmlFor="intext1" className="form-label">
                Pool pubkey
              </label>
              <input
                type="text"
                id="poolpubkey"
                className="form-control"
                required
                autoFocus=""
                onChange={this.handleChange}
              />
            </div>
            <div className="howtoget">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  lineHeight: "1.4"
                }}
              >
                <div> Farm pubkey və Pool pubkey necə əldə etməli?</div>
                <div className="hover">
                  <img src={image} alt="" />
                  <div className="tooltip1">
                    <div className="header">
                      <img src={image} alt="" /> Məlumat
                    </div>
                    <div>
                      <span style={{ fontWeight: "bold" }}>Seçim 1: </span>
                      <span style={{ lineHeight: "25px" }}>
                        Chia'nı uğurla quraşdırdıqdan sonra "chia keys show"
                        seçimini edin. Farm pubkey və Pool pubkey aşağıda
                        göstərilir:
                      </span>
                      <span style={{ lineHeight: "25px" }}>
                        <br />
                        <br />
                        Bütün şəxsi açarlar göstərilir:
                        <br />
                        Fingerprint: 1234567890
                        <br />
                        Master public key (m): aabb….eeff
                        <br />
                        Master private key (m): a1b2….9e0f
                        <br /> <b>Farmer public key</b> (m/12381/8444/0/0)::
                        abcd….ef12
                        <br />
                        <b>Pool public key</b> (m/12381/8444/1/0): bcde….f012
                        <br />
                        <br />
                      </span>
                      <span style={{ fontWeight: "bold" }}> Seçim 2 : </span>
                      <span style={{ lineHeight: "25px" }}>
                        <br />
                        Addım 1. Chia Blockchain tətbiqini işə salın
                        <br />
                        Addım 2. ‘Plots’ bölməsinə keçin
                        <br /> Addım 3. ‘Add Plot’ seçimini edin.
                        <br />
                        Addım 4. ‘Create Plot’ seçimini edin
                        <br /> Addım 5. 'Üç nöqtə' düyməsini basın <br />
                        Addım 6. ‘View Log’ üzərinə klikləyin <br />
                        Addım 7. Sizə məxsus <b>’Farmer Public Key’</b> və{" "}
                        <b>‘Pool Public Key’</b>ləri görürsünüzmü?
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="buttonsStep2">
              <Link to="/register">
                <button type="submit" class="buttonback">
                  Geriyə
                </button>
              </Link>
              <Link to="/Dashboard">
                <button type="submit" class="buttonfinish">
                  Bitir
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

const mapStateToProps = (state) => {
  console.log("state:  " + state.users);
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterStep2);

/*  {authError ? (
          <div class="p-3 mb-2 bg-danger text-white">
            <span>{authError}</span>
          </div>
        ) : null} */
