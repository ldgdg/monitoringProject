import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const h_list = [
    {
      health_check: 0,
      client_name: "호스트트토 치과",
      hosting_url: "hoshost.cafe25.com",
      domain: "dododomain.com",
      host_exp: Date("2026.06.09"),
      domain_exp: "",
      ssl_exp: "",
      payment: "",
    },
  ];

  return (
    <div className="App">
      <Sidebar />
      <main className="content">
        <header className="Header">
          <div>대시보드</div>
          <div>
            <span>2025.12.02 17:55 최신화</span>
            <button className="refresh">⟳</button>
          </div>
        </header>
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
          <div className="table_wrap">
            <div className="indicator">
              <div>
                {/* <span>호스팅 만료까지</span> */}
                <span>{h_list[0].host_exp}</span>
                <div className="text">
                  <b>30</b> 일
                </div>
              </div>
              <div>
                <span>도메인 만료까지</span>
                <div className="text">
                  <b>60</b> 일
                </div>
              </div>
              <div>
                <span>인증서 만료까지</span>
                <div className="text">
                  <b>365</b> 일
                </div>
              </div>
            </div>
            <div className="table">
              <div>
                <table>
                  <colgroup>
                    <col style={{ width: "72px" }} />
                    <col style={{ width: "136px" }} />
                    <col style={{ width: "188px" }} />
                    <col style={{ width: "auto" }} />
                    <col style={{ width: "132px" }} />
                    <col style={{ width: "132px" }} />
                    <col style={{ width: "132px" }} />
                    <col style={{ width: "94px" }} />
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
                    <col style={{ width: "188px" }} />
                    <col style={{ width: "auto" }} />
                    <col style={{ width: "132px" }} />
                    <col style={{ width: "132px" }} />
                    <col style={{ width: "132px" }} />
                    <col style={{ width: "94px" }} />
                  </colgroup>
                  <tbody>
                    <tr className="selected">
                      <td>
                        <span className="danger"></span>
                      </td>
                      <td>병원</td>
                      <td>url</td>
                      <td>도메인</td>
                      <td>호스팅 만료</td>
                      <td>도메인 만료</td>
                      <td>인증서 만료</td>
                      <td>결제여부</td>
                    </tr>
                    <tr>
                      <td>
                        <span></span>
                      </td>
                      <td>병원</td>
                      <td>url</td>
                      <td>도메인</td>
                      <td>호스팅 만료</td>
                      <td>도메인 만료</td>
                      <td>인증서 만료</td>
                      <td>결제여부</td>
                    </tr>
                    <tr>
                      <td>
                        <span></span>
                      </td>
                      <td>병원</td>
                      <td>url</td>
                      <td>도메인</td>
                      <td>호스팅 만료</td>
                      <td>도메인 만료</td>
                      <td>인증서 만료</td>
                      <td>결제여부</td>
                    </tr>
                    <tr>
                      <td>
                        <span></span>
                      </td>
                      <td>병원</td>
                      <td>url</td>
                      <td>도메인</td>
                      <td>호스팅 만료</td>
                      <td>도메인 만료</td>
                      <td>인증서 만료</td>
                      <td>결제여부</td>
                    </tr>
                    <tr>
                      <td>
                        <span></span>
                      </td>
                      <td>병원</td>
                      <td>url</td>
                      <td>도메인</td>
                      <td>호스팅 만료</td>
                      <td>도메인 만료</td>
                      <td>인증서 만료</td>
                      <td>결제여부</td>
                    </tr>
                    <tr>
                      <td>
                        <span></span>
                      </td>
                      <td>병원</td>
                      <td>url</td>
                      <td>도메인</td>
                      <td>호스팅 만료</td>
                      <td>도메인 만료</td>
                      <td>인증서 만료</td>
                      <td>결제여부</td>
                    </tr>
                    <tr>
                      <td>
                        <span></span>
                      </td>
                      <td>병원</td>
                      <td>url</td>
                      <td>도메인</td>
                      <td>호스팅 만료</td>
                      <td>도메인 만료</td>
                      <td>인증서 만료</td>
                      <td>결제여부</td>
                    </tr>
                    <tr>
                      <td>
                        <span></span>
                      </td>
                      <td>병원</td>
                      <td>url</td>
                      <td>도메인</td>
                      <td>호스팅 만료</td>
                      <td>도메인 만료</td>
                      <td>인증서 만료</td>
                      <td>결제여부</td>
                    </tr>
                    <tr>
                      <td>
                        <span></span>
                      </td>
                      <td>병원</td>
                      <td>url</td>
                      <td>도메인</td>
                      <td>호스팅 만료</td>
                      <td>도메인 만료</td>
                      <td>인증서 만료</td>
                      <td>결제여부</td>
                    </tr>
                    <tr>
                      <td>
                        <span></span>
                      </td>
                      <td>병원</td>
                      <td>url</td>
                      <td>도메인</td>
                      <td>호스팅 만료</td>
                      <td>도메인 만료</td>
                      <td>인증서 만료</td>
                      <td>결제여부</td>
                    </tr>
                    <tr>
                      <td>
                        <span></span>
                      </td>
                      <td>병원</td>
                      <td>url</td>
                      <td>도메인</td>
                      <td>호스팅 만료</td>
                      <td>도메인 만료</td>
                      <td>인증서 만료</td>
                      <td>결제여부</td>
                    </tr>
                    <tr>
                      <td>
                        <span></span>
                      </td>
                      <td>병원</td>
                      <td>url</td>
                      <td>도메인</td>
                      <td>호스팅 만료</td>
                      <td>도메인 만료</td>
                      <td>인증서 만료</td>
                      <td>결제여부</td>
                    </tr>
                    <tr>
                      <td>
                        <span></span>
                      </td>
                      <td>병원</td>
                      <td>url</td>
                      <td>도메인</td>
                      <td>호스팅 만료</td>
                      <td>도메인 만료</td>
                      <td>인증서 만료</td>
                      <td>결제여부</td>
                    </tr>
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
