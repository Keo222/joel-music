import React from "react";
// REACT-ROUTER-DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// STYLED COMPONENTS
import styled, { ThemeProvider } from "styled-components";
// Theme Style
import { theme } from "./styled/themes";

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Listen from "./pages/Listen";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Hire from "./pages/Hire";

// Components
import Navbar from "./components/Navbar";

// Styled Elements
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.color.background};
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/listen" element={<Listen />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/hire" element={<Hire />} />
          </Routes>
        </Router>
      </Background>
    </ThemeProvider>
  );
};

export default App;
