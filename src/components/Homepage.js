import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
// import logo from "./Vector.png";

const Homepage = () => {
  return (
    <div className="container p-4">
      <div className="referearn">
        <div className="refertop">
          <p className="refertitle">
            UI/UX<i className="fa-solid fa-chevron-right"></i>Refer & Earn
          </p>
        </div>
        <div className="middlelayer">
          <div className="referuppmiddle">
            <div className="uppermiddle">
              <div className="boxx">
                <div className="middlehead">Referral Earning</div>
                <div className="middleheadans">₹ 2,500</div>
              </div>
              <div className="boxx">
                <div className="middlehead">Total Referrals</div>
                <div className="middleheadans">7</div>
              </div>
              <div className="boxx">
                <div className="middlehead">Wallet Balance</div>
                <div className="middleheadans">₹ 500</div>
              </div>
            </div>
            <div className="buttonwithdraw">
              <button className="withdraw">Withdraw Balance</button>
            </div>
          </div>
          <div className="referralcode">
            <div className="rightmiddle">
              <p className="fw-bold">Your Referral Code</p>
            </div>
            <div className="code">
              <div className="coderefer">
                <div className="letter">E</div>
                <div className="letter">D</div>
                <div className="letter">C</div>
                <div className="letter">H</div>
                <div className="letter">5</div>
                <div className="letter">4</div>
              </div>
            </div>
          </div>
        </div>
        <div className="working">
          <p className="worktitle">How does it work?</p>
          <div className="row boxxess">
            <div className="col-md-5">
              <div className="listboxx">
                <div className="fontimage">
                  <img src="./Vector.png" alt="Loading" />
                </div>
                <div className="descript">
                  <p className="inviteee mb-1">Invite your Friends</p>
                  <p>Share the link tutedude.com with your friends</p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="listboxx">
                <div className="fontimage">
                  <img src="./Vector-3.png" alt="Loading" />
                </div>
                <div className="descript">
                  <p className="inviteee mb-1">Friend purchases any course</p>
                  <p>Using your REFERRAL CODE in the payments page</p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="listboxx">
                <div className="fontimage">
                  <img src="./₹.png" alt="Loading" />
                </div>
                <div className="descript">
                  <p className="inviteee mb-1">
                    You get ₹ 200 as referral money
                  </p>
                  <p>On total purchase the friend makes, into your wallet</p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="listboxx">
                <div className="fontimage">
                  <img src="./Vector-2.png" alt="Loading" />
                </div>
                <div className="descript">
                  <p className="inviteee mb-1">Your Friend gets ₹ 200 Off </p>
                  <p>
                    On his overall fee on successful purchase using your
                    referral code{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="listboxx">
                <div className="fontimage">
                  <img src="./Vector-4.png" alt="Loading" />
                </div>
                <div className="descript">
                  <p className="inviteee mb-1">Transfer money from wallet</p>
                  <p>
                    When the wallet balance reaches ₹200 or more, you can
                    withdraw it
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="enrolled">
            <Link style={{ textDecoration: "none" }} to="/friendsrefer">
              <p className="enrolledfr">Friends Who Enrolled</p>
            </Link>
          </div>

          <div className="termscondi">
            <p className="enrolledfr">Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
