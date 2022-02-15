import React from "react";
// REACT-ROUTER-DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// STYLED COMPONENTS
import { ThemeProvider } from "styled-components";
// Theme Style
import { theme } from "./styled/themes";

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Listen from "./pages/Listen";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Hire from "./pages/Hire";
import Admin from "./pages/Admin/AdminHome";
import AdminTracks from "./pages/Admin/AdminTracks";

// Components
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/listen" element={<Listen />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/tracks" element={<AdminTracks />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
