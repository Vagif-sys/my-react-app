import React from "react";
import "./Footer.scss";
export default class Footer extends React.Component {
  render() {
    return (
      <div className="footerr">
        <footer class="footer">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="d-flex justify-content-between py-5">
                  <div class="contact-details">
                    <a
                      href="https://github.com/chiaazerbaijan "
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        class="m-2"
                        src="https://www.chia.net/img/social/github_light.svg"
                        alt="GitHub Logo"
                      />
                    </a>
                    <a
                      href="https://twitter.com/chiaazerbaijan"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        class="m-2"
                        src="https://www.chia.net/img/social/twitter_light.svg"
                        alt="Twitter Logo"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/chiaazerbaijan"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        class="m-2"
                        src="https://www.chia.net/img/social/facebook_light.svg"
                        alt="Facebook Logo"
                      />
                    </a>
                    <a
                      href="https://instagram.com/chiaazerbaijan"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        class="m-2"
                        src="https://www.chia.net/img/social/instagram_light.svg"
                        alt="Instagram Logo"
                      />
                    </a>
                    <a
                      href="https://medium.com/chiaazerbaijan"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        class="m-2"
                        src="https://www.chia.net/img/social/medium_light.svg"
                        alt="Medium Logo"
                      />
                    </a>
                  </div>
                  <div style={{ textAlign: "right" }} className="footerfooter">
                    <img
                      class="logo"
                      src="https://www.chia.net/img/chia_logo.svg"
                      alt="chia_logo"
                    />
                    <div class="copyright">
                      © Chia Network 2021 |{" "}
                      <a href="/terms">© Chia Azerbaijan 2021 </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
