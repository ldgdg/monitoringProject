import "./Sidebar.css";
// import React, { Component } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="Sidebar r20">
      <div className="logo box20">
        <Link to="/" className="">
          Bigcraft
        </Link>
      </div>
      <ul className="menu box20">
        <li className="selected r10">
          <Link to="/" className="box20">
            대시보드
          </Link>
        </li>
        <li className="r10">
          <Link to="/Clientlist" className="box20">
            홈페이지 관리
          </Link>
        </li>
        <li className="r10">
          <Link to="/Settings" className="box20">
            기타 설정
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
