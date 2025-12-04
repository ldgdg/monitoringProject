// import "./App.css";
// import React, { Component } from "react";

function Sidebar() {
  return (
    <aside className="Sidebar">
      <div className="logo">Bigcraft</div>
      <ul className="menu">
        <li className="selected">대시보드</li>
        <li>홈페이지 관리</li>
        <li>기타 설정</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
