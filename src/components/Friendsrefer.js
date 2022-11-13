import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Friendsrefer.css";

const Friendsrefer = () => {
  const courses = [
    {
      name: "Dhiraj Saxsena",
      date: "14 Sep, 2022",
      total: 6,
      topics: ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java"],
      amount: 185,
    },
    {
      name: "Subhash Mishra",
      date: "15 Sep, 2022",
      total: 23,
      topics: [
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "MERN",
        "Java",
        "C++",
        "React",
        "MongoDB",
        "C",
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "MERN",
        "Java",
        "C++",
        "React",
        "MongoDB",
        "C",
        "Example",
        "Example",
        "Example",
      ],
      amount: 485,
    },
    {
      name: "Prafull Kumar",
      date: "15 Sep, 2022",
      total: 23,
      topics: [
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "MERN",
        "Java",
        "C++",
        "React",
        "MongoDB",
        "C",
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "MERN",
        "Java",
        "C++",
        "React",
        "MongoDB",
        "C",
        "Example",
        "Example",
        "Example",
      ],
      amount: 185,
    },
  ];
  const [friends, setFriends] = useState(courses.length);
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
          Friends who enrolled<span className="numenrolled">({friends})</span>
        </p>
        <div className="referredfriends row">
          {courses.map((element) => {
            return (
              <div className="col-md-4 detailsfriends">
                <div className="boxheader mb-2">
                  <div className="personname">{element.name}</div>
                  <div className="persondate">{element.date}</div>
                </div>
                <div className="coursesenrol">
                  Courses Enrolled({element.total})
                </div>
                <div className="coursesname row">
                  {element.topics.map((e) => {
                    return <div className="topicsname col-md-4">{e}</div>;
                  })}
                </div>
                <div className="amourefer">
                  Referral amount
                  <span className="amountreferral"> ₹{element.amount}</span>
                </div>
              </div>
            );
          })}
        </div>
        <p className="conditerms">Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Friendsrefer;
