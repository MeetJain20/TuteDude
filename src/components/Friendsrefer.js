import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Friendsrefer.css";

const Friendsrefer = () => {
  return (
    <div className="container p-4">
      <div className="referearn">
        <div className="refertop">
          <p className="refertitle">
            UI/UX<i className="fa-solid fa-chevron-right"></i>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Refer & Earn
            </Link>
            <i className="fa-solid fa-chevron-right"></i>Friends Referred
          </p>
        </div>
        <div className="referral">
          <div className="referralcolu">
            <div className="referraltitle">Your Referral Code</div>
            <div className="referralcodee">
              <div className="codereferrer">
                <div className="letterss">E</div>
                <div className="letterss">D</div>
                <div className="letterss">C</div>
                <div className="letterss">H</div>
                <div className="letterss">5</div>
                <div className="letterss">4</div>
              </div>
            </div>
          </div>
          <div className="walletbal">
            <p className="wallettitle mb-0">Wallet Balance</p>
            <p className="mb-0 walletval">₹ 500</p>
          </div>
        </div>
        <p className="boldfriends">
          Friends who enrolled<span className="numenrolled">(3)</span>
        </p>
        <div className="referredfriends"></div>
      </div>
    </div>
  );
};

export default Friendsrefer;
