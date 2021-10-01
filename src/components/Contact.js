import React from "react";
import "./Contact.scss";
import "./all.css";
export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div class="contact">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h1 class="page-main-title mt-5">ƏLAQƏ</h1>
              </div>
            </div>
            <div class="row details">
              <div class="col-lg-5">
                <div class="details-box">
                  <h2>Chia Network – Chia.AZ</h2>
                  <a class="contact-email" href="mailto:hello@chia.net">
                    info@chia.az
                  </a>
                  <div class="handle">
                    <img
                      src="https://www.chia.net/img/social/github.svg"
                      alt="Github Logo"
                    />
                    <a
                      href="https://www.facebook.com/ChiaProject"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      @chiaazerbaijan
                    </a>
                  </div>
                  <div class="handle">
                    <img
                      src="https://www.chia.net/img/social/twitter.svg"
                      alt="Twitter Logo"
                    />
                    <a
                      href="https://www.facebook.com/ChiaProject"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      @chiaazerbaijan
                    </a>
                  </div>
                  <div class="handle">
                    <img
                      src="https://www.chia.net/img/social/facebook.svg"
                      alt="Facebook Logo"
                    />
                    <a
                      href="https://www.facebook.com/ChiaProject"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      @chiaazerbaijan
                    </a>
                  </div>
                  <div class="handle">
                    <img
                      src="https://www.chia.net/img/social/instagram.svg"
                      alt="Instagram Logo"
                    />
                    <a
                      href="https://instagram.com/chia_project"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      @chiaazerbaijan
                    </a>
                  </div>
                  <div class="handle">
                    <img
                      src="https://www.chia.net/img/social/medium.svg"
                      alt="Medium Logo"
                    />
                    <a
                      href="https://instagram.com/chia_project"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      @chiaazerbaijan
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-7 mt-3 mt-lg-0">
                <div class="details-box text-lg-center">
                  <h4>
                    Media üçün məlumat:
                    <a href="mailto: chia@fticonsulting.com"> media@chia.az</a>
                  </h4>
                  <br />

                  <div class="email-box">
                    <h2>Yeniliklərdən xəbərdar olmaq üçün</h2>

                    <link
                      href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css"
                      rel="stylesheet"
                      type="text/css"
                    />
                    <div class="email-form d-inline-block" id="mc_embed_signup">
                      <form
                        action="https://chia.us20.list-manage.com/subscribe/post?u=e4d570ef4efb6250ec4a2d825&amp;id=bbcb58034c"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        class="validate"
                        target="_blank"
                        novalidate=""
                      >
                        <div
                          class="input-group mb-3"
                          id="mc_embed_signup_scroll"
                        >
                          <input
                            class="form-control"
                            type="email"
                            id="mce-EMAIL"
                            name="EMAIL"
                            placeholder="E-poçt"
                            required=""
                            aria-label="Email"
                          />

                          <button
                            class="signup-button btn btn-primary"
                            type="submit"
                            value="Subscribe"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                          >
                            Göndər
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/*<a
                    href="https://keybase.io/team/chia_network.public"
                    target="_blank"
                    rel="noreferrer noopener"
                    class="join-keybase btn"
                  >
                    Join our Keybase group
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
