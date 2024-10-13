// import CSS
import "./App.css";

// import libraries
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Pages
import AboutUs from "./pages/AboutUs/AboutUs";
import Blogs from "./pages/Blogs/Blogs";
import Homepage from "./pages/Homepage/Homepage";
import Specialisation from "./pages/Specialisation/Specialisation";
import NotFound from "./pages/NotFound/NotFound";
import Leadership from "./pages/Leadership/Leadership";
import Team from "./pages/Team/Team";

function App() {
  return (
    <div className="app_container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/blogs" element={<Blogs />} />
          {/* <Route path="/about-us" element={<AboutUs />} /> */}
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/team" element={<Team />} />
          <Route path="/specialisation" element={<Specialisation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
