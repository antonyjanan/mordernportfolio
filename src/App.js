import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utilis/Themes";
import Navbar from "./components/NavBar";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Hero from "./components/HeroSection";
import { BrowserRouter as Router } from "react-router-dom";
import Experience from "./components/Experience";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 0 cal(100% - 55vw));
`;
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            <Experience />
            <Education />
          </Wrapper>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
