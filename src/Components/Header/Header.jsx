import React from "react";
import "./Header.css";
import CompanyLogo from "./Header.svg";
import Basket from "./Basket.svg";
import user from "./user.svg";
import search from "./search.svg";

export default function Header() {
  return (
    <div className=" header">
      <span className="logo">
        <img src={CompanyLogo} alt="logo"></img>
      </span>
      <input className="searchBar " type="search" />
      <button
        className="searchLogo
      "
      >
        <img src={search} alt="search"></img>{" "}
      </button>

      <div className="user_basket ">
        <img src={user} alt="user"></img>
        <img src={Basket} alt="basket"></img>
      </div>
    </div>
  );
}
