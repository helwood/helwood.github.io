import styled from "styled-components";
import portrait from "../images/me.jpg";
import { breakpoints } from "../helpers/media";

const AboutSection = styled.div`
  background: #fff;
  width: 100%;
  padding: 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${breakpoints.up("tablet")} {
    padding: 100px 0;
    width: 80%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const Portrait = styled.img`
  border-radius: 100%;
  width: 200px;
`;

const AboutContent = styled.div`
  padding-left: 0;
  padding-top: 40px;
  ${breakpoints.up("tablet")} {
    padding-top: 0;
    padding-left: 40px;
  }

  h2 {
    color: #a35ca0;
    font-weight: 400;
    font-size: 1.8rem;
    margin-bottom: 14px;
  }
  p {
    margin-bottom: 16px;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <Portrait src={portrait} alt="Heather Elwood"></Portrait>
      <AboutContent>
        <h2>A little about me</h2>
        <p>
          Hey there, my name is Heather. I'm a User Experience (UX) Engineer
          living in the Bay Area, CA.
        </p>
        <p>
          I have been in the web industry for about 10 years now. I graduated
          with a BS in New Media Interactive Development from Rochester
          Institute of Technology (RIT) in 2012. Since then I have worked as a
          Front-End Engineer, UX Prototyper and finally a UX Engineer.
        </p>
        <p>
          A UX Engineer is essentially a translator that speaks both design and
          engineering languages. I usually sit on a UX team and fill whatever
          gaps that team needs. Here are some of the many things I can provide:
        </p>
        <ul>
          <li>Create both low and high fidelity prototypes.</li>
          <li>Provide design guidance for technical feasibility.</li>
          <li>Make sure everything remains accessible for our users.</li>
          <li>
            Improve designer and developer experience through the creation of
            internal tooling.
          </li>
        </ul>
        <p>
          I am currently working at Google on the Search Design System team. I
          have helped guide design token creation and architecture within
          Search. I have used those learnings to teach tokens at a company wide
          level.
        </p>
        <p>
          I have been working in the design system space since 2018 and started
          specializing in design tokens in 2020. If you want to talk systems
          design, foundation principles and how all the pieces of a system
          connect, let's chat!
        </p>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
