import styled from "styled-components";

import { CssReset } from "./components/CSSReset";
import { GlobalStyles } from "./components/GlobalStyles";

import Intro from "./components/Intro";
import About from "./components/About";
import Contact from "./components/Contact";

const FullSection = styled.div`
  padding: 10px 10px 0 10px;
  background: ${(props) => props.bgcolor || "none"};
`;

const BorderWrap = styled.span`
  width: 100%;
  height: 100%;
  margin: auto;
  border: 10px solid transparent;
  position: fixed;
  top: 0;
  left: 0;
  -moz-border-image: -moz-linear-gradient(top left, #596692 0%, #ad6da6 100%);
  -webkit-border-image: -webkit-linear-gradient(
    top left,
    #596692 0%,
    #ad6da6 100%
  );
  border-image: linear-gradient(to bottom right, #596692 0%, #ad6da6 100%);
  border-image-slice: 1;
  z-index: 0;
`;

function App() {
  return (
    <>
      <CssReset />
      <GlobalStyles />
      <BorderWrap />
      <FullSection style={{ height: "100%" }}>
        <Intro />
      </FullSection>
      <FullSection bgcolor="#fff">
        <About />
      </FullSection>
      <Contact />
    </>
  );
}

export default App;
