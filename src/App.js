import { useState } from "react";

import "./styles/App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import TopNavbar from "./Components/TopNavbar/TopNavbar";
import PageContent from "./Components/PageContent/PageContent";
import { BrowserRouter, Outlet, Route, Router, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TestPage from "./pages/TestPage";
import LoremPage from "./pages/LoremPage";
import CmdbPage from "./pages/CmdbPage";

function App() {

  const [nodes, setNodes] = useState([
    {
      id: 0,
      title: "Дашборд",
      icon: "home-outline",
      links: [
        {id: 0, href: "/", text: "MainPage"},
        {id: 1, href: "/test", text: "Test"},
        {id: 2, href: "/lorem", text: "Lorem Ipsum"},
      ]
    },
    {
      id: 1,
      title: "CMDB",
      icon: "server-outline",
      links: [
        {id: 0, href: "/cmdb", text: "Серверы и ПК"},
        {id: 1, href: "/ds", text: "Гипервизоры и вирт. машины"},
        {id: 2, href: "/sd", text: "Принтеры и МФУ"},
        {id: 3, href: "/zxc", text: "Сетевые устройства"},
      ]
    }
  ]);




  return (
    

    <div className="App">
      <Sidebar nodes={nodes}/>
      <TopNavbar/>

      <section>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/test" element={<TestPage/>}/>
          <Route path="/lorem" element={<LoremPage/>}/>
          <Route path="/cmdb" element={<CmdbPage/>}/>
        </Routes>
      </section>
        

      {/* <PageContent/> */}
    </div>
  );
}

export default App;
