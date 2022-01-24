import styled from "styled-components";
import logo from "../images/logo.svg";
import bg from "../images/bg.jpg";

const IntroSection = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: url(${(props) => props.bgsrc}) center center no-repeat;
  background-size: cover;

  img {
    width: 100px;
    margin-bottom: 40px;
  }
`;

const Intro = () => {
  return (
    <IntroSection bgsrc={bg}>
      <img src={logo} alt="Heather Elwood Logo" />
      <h1>Heather Elwood</h1>
      <h3>UX Engineer</h3>
    </IntroSection>
  );
};

export default Intro;
