// import "./App.css";
// import React, { Component } from "react";

function Sidebar() {
  return (
    <aside className="Sidebar r20">
      <div className="logo box20">Bigcraft</div>
      <ul className="menu box20">
        <li className="selected r10">대시보드</li>
        <li className="r10">홈페이지 관리</li>
        <li className="r10">기타 설정</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
