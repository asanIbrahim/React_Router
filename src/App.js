import Home from "./Pages/Home";
import "./App.css";
import User from "./Pages/User";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Instagram from "./Pages/Instagram";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar  userName="instagram"/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/instagram/:userName" element={<Instagram />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<h1>404-Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
