import { useState } from "react";
import dayjs from "dayjs";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  const h_list = [
    {
      health_check: "danger",
      client_name: "호스트트토 치과",
      hosting_url: "hoshost.cafe25.com",
      domain: "dododomain.com",
      host_exp: new Date("2026.06.09"),
      domain_exp: new Date("2025.12.31"),
      ssl_exp: new Date("2026.05.11"),
      payment: "빅크",
    },
    {
      health_check: "",
      client_name: "호스트트토 치과",
      hosting_url: "hoshost.cafe25.com",
      domain: "dododomain.com",
      host_exp: new Date("2026.06.09"),
      domain_exp: new Date("2025.12.31"),
      ssl_exp: new Date("2026.05.11"),
      payment: "빅크",
    },
    {
      health_check: "",
      client_name: "호스트트토 치과",
      hosting_url: "hoshost.cafe25.com",
      domain: "dododomain.com",
      host_exp: new Date("2026.06.09"),
      domain_exp: new Date("2025.12.31"),
      ssl_exp: new Date("2026.05.11"),
      payment: "빅크",
    },
    {
      health_check: "",
      client_name: "호스트트토 치과",
      hosting_url: "hoshost.cafe25.com",
      domain: "dododomain.com",
      host_exp: new Date("2026.06.09"),
      domain_exp: new Date("2025.12.31"),
      ssl_exp: new Date("2026.05.11"),
      payment: "빅크",
    },
    {
      health_check: "",
      client_name: "호스트트토 치과",
      hosting_url: "hoshost.cafe25.com",
      domain: "dododomain.com",
      host_exp: new Date("2026.06.09"),
      domain_exp: new Date("2025.12.31"),
      ssl_exp: new Date("2026.05.11"),
      payment: "빅크",
    },
    {
      health_check: "danger",
      client_name: "호스트트토 치과",
      hosting_url: "hoshost.cafe25.com",
      domain: "dododomain.com",
      host_exp: new Date("2026.06.09"),
      domain_exp: new Date("2025.12.31"),
      ssl_exp: new Date("2026.05.11"),
      payment: "빅크",
    },
    {
      health_check: "",
      client_name: "호스트트토 치과",
      hosting_url: "hoshost.cafe25.com",
      domain: "dododomain.com",
      host_exp: new Date("2026.06.09"),
      domain_exp: new Date("2025.12.31"),
      ssl_exp: new Date("2026.05.11"),
      payment: "빅크",
    },
    {
      health_check: "",
      client_name: "호스트트토 치과",
      hosting_url: "hoshost.cafe25.com",
      domain: "dododomain.com",
      host_exp: new Date("2026.06.09"),
      domain_exp: new Date("2025.12.31"),
      ssl_exp: new Date("2026.05.11"),
      payment: "빅크",
    },
    {
      health_check: "danger",
      client_name: "호스트트토 치과",
      hosting_url: "hoshost.cafe25.com",
      domain: "dododomain.com",
      host_exp: new Date("2026.06.09"),
      domain_exp: new Date("2025.12.31"),
      ssl_exp: new Date("2026.05.11"),
      payment: "빅크",
    },
    {
      health_check: "",
      client_name: "호스트트토 치과",
      hosting_url: "hoshost.cafe25.com",
      domain: "dododomain.com",
      host_exp: new Date("2026.06.09"),
      domain_exp: new Date("2025.12.31"),
      ssl_exp: new Date("2026.05.11"),
      payment: "빅크",
    },
    {
      health_check: "",
      client_name: "호스트트토 치과",
      hosting_url: "hoshost.cafe25.com",
      domain: "dododomain.com",
      host_exp: new Date("2026.06.09"),
      domain_exp: new Date("2025.12.31"),
      ssl_exp: new Date("2026.05.11"),
      payment: "빅크",
    },
  ];

  return (
    <div className="App box20">
      <Sidebar />
      <main className="content">
        <header className="Header box20 r20">
          <div className="box20">대시보드</div>
          <div className="box20">
            <span>2025.12.02 17:55 최신화</span>
            <button className="refresh">⟳</button>
          </div>
        </header>
        <section className="Dashboard">
          <div className="due box20 r20">
            <div className="box20 r10">
              <span>관리 홈페이지 수</span>
              <div></div>
            </div>
            <div className="box20 r10">
              <span>호스팅 만료</span>
              <div>
                <div className="badge">
                  <span className="dday">16</span>
                  <span>뭐시기치과</span>
                </div>
              </div>
            </div>
            <div className="box20 r10">
              <span>도메인 만료</span>
              <div></div>
            </div>
            <div className="box20 r10">
              <span>인증서 만료</span>
              <div></div>
            </div>
          </div>
          <div className="table_wrap box20 r20">
            <div className="indicator">
              <div className="box20 r10">
                <span>호스팅 만료까지</span>
                <div className="text">
                  <b>30</b> 일
                </div>
              </div>
              <div className="box20 r10">
                <span>도메인 만료까지</span>
                <div className="text">
                  <b>60</b> 일
                </div>
              </div>
              <div className="box20 r10">
                <span>인증서 만료까지</span>
                <div className="text">
                  <b>365</b> 일
                </div>
              </div>
            </div>
            <div className="table box20 r10">
              <div className="table_head">
                <table>
                  <colgroup>
                    <col style={{ width: "72px" }} />
                    <col style={{ width: "136px" }} />
                    <col style={{ width: "250px" }} />
                    <col style={{ width: "auto" }} />
                    <col style={{ width: "120px" }} />
                    <col style={{ width: "120px" }} />
                    <col style={{ width: "120px" }} />
                    <col style={{ width: "72px" }} />
                    <col style={{ width: "4px" }} /> {/*스크롤바*/}
                  </colgroup>
                  <thead>
                    <tr>
                      <th>Health Check</th>
                      <th>병원</th>
                      <th>url</th>
                      <th>도메인</th>
                      <th>호스팅 만료</th>
                      <th>도메인 만료</th>
                      <th>인증서 만료</th>
                      <th>결제여부</th>
                      <th></th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="table_body">
                <table>
                  <colgroup>
                    <col style={{ width: "72px" }} />
                    <col style={{ width: "136px" }} />
                    <col style={{ width: "250px" }} />
                    <col style={{ width: "auto" }} />
                    <col style={{ width: "120px" }} />
                    <col style={{ width: "120px" }} />
                    <col style={{ width: "120px" }} />
                    <col style={{ width: "72px" }} />
                  </colgroup>
                  <tbody>
                    {h_list.map((a, i) => {
                      return (
                        <tr className={i == 0 ? "selected" : ""}>
                          {" "}
                          {/*그냥 임시로 첫 줄만 선택된 척*/}
                          <td>
                            <span className={a.health_check}></span>
                          </td>
                          <td>
                            <span>{a.client_name}</span>
                          </td>
                          <td>
                            <span>{a.hosting_url}</span>
                          </td>
                          <td>
                            <span>{a.domain}</span>
                          </td>
                          <td>
                            <span>
                              {dayjs(a.host_exp).format("YYYY-MM-DD")}
                            </span>
                          </td>
                          <td>
                            <span>
                              {dayjs(a.domain_exp).format("YYYY-MM-DD")}
                            </span>
                          </td>
                          <td>
                            <span>{dayjs(a.ssl_exp).format("YYYY-MM-DD")}</span>
                          </td>
                          <td>
                            <span>{a.payment}</span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
