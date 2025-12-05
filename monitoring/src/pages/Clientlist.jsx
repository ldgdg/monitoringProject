// import "./App.css";
// import React, { Component } from "react";
import dayjs from "dayjs";
import "../Clientlist.css";

function Clientlist() {
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
  ];
  return (
    <section className="Clientlist">
      <div className="table_wrap box20 r20">
        <div className="util box20 r10">
          <div id="filter">
            <div className="input_area">
              <label htmlFor="">병원명 : </label>
              <input type="text" />
            </div>
            <button>
              <span>🔎</span>검색
            </button>
          </div>
          <div id="edit">
            <button>수정/상세보기</button>
            <button>신규등록</button>
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
                <col style={{ width: "4px" }} />
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
                        <span>{dayjs(a.host_exp).format("YYYY-MM-DD")}</span>
                      </td>
                      <td>
                        <span>{dayjs(a.domain_exp).format("YYYY-MM-DD")}</span>
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
  );
}

export default Clientlist;
