import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">Sell with us </a>
              </li>
              <li>
                {/* Help and FAQs Exchange and Returns Policy Privacy Policy Terms and Conditions */}
                <a href="#">Our seller</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Custmor Service</h4>
            <ul>
              <li>
                <a href="#">Help and FAQs</a>
              </li>
              <li>
                <a href="#">Exchange and Returns Policy</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
            </ul>
          </div>
          {/* OUR STORES Stores and Services Location and Hours Catalogs */}
          <div class="footer-col">
            <h4>OUR STORES</h4>
            <ul>
              <li>
                <a href="#">Stores and Services</a>
              </li>
              <li>
                <a href="#">Location and Hours</a>
              </li>
              <li>
                <a href="#">Catalogs</a>
              </li>
            </ul>
          </div>
          <div class="footer-col serch">
            <p>Subscribe Newsletter</p>
            <form>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
              />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
      <hr />
      <div className="next_footer">
        <span>1800 420 0707</span>
        <span>customercare@company.com</span>
      </div>
      <div className="adress">
        <span>Address line 1</span>
        <span>Address line 2</span>
      </div>
      <div className="social_logo"></div>

      <div className="copyright">
        <p>Copyrights © 2021 Company Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
