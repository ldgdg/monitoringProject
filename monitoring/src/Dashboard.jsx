// import "./App.css";
// import React, { Component } from "react";

function Dashboard() {
  return (
    <section className="Dashboard">
      <div className="due">
        <div>
          <span>관리 홈페이지 수</span>
        </div>
        <div>
          <span>호스팅 만료</span>
        </div>
        <div>
          <span>도메인 만료</span>
        </div>
        <div>
          <span>인증서 만료</span>
        </div>
      </div>
      <div className="table">
        <div className="indicator">
          <div>
            <span>호스팅 만료까지</span>
            <div className="text">
              <b>30</b>일
            </div>
          </div>
          <div>
            <span>도메인 만료까지</span>
            <div className="text">
              <b>60</b>일
            </div>
          </div>
          <div>
            <span>인증서 만료까지</span>
            <div className="text">
              <b>365</b>일
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Dashboard;
