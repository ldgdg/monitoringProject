import { useState } from "react";
// import dayjs from "dayjs";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "./pages/Dashboard";
import Clientlist from "./pages/Clientlist";
import Settings from "./pages/Settings";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App box20">
      <BrowserRouter>
        <Sidebar />
        <main className="content">
          <Header />
          <Routes>
            <Route path="" element={<Dashboard />}></Route>
            <Route path="/Clientlist" element={<Clientlist />}></Route>
            <Route path="/Settings" element={<Settings />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
