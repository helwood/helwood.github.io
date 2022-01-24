import styled from "styled-components";
import { breakpoints } from "../helpers/media";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faBitbucket,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

const ContactSection = styled.div`
  padding: 100px 0;
  text-align: center;

  h2 {
    font-weight: 400;
    font-size: 1.8rem;
    margin-bottom: 24px;
    color: #e5e5e5;
  }
`;
const ContactIcons = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    height: 32px;
    width: 32px;
    fill: #e5e5e5;
  }
  a {
    margin-right: 20px;
    color: #e5e5e5;
    z-index: 10;
    &:hover,
    &:focus,
    &:active {
      color: #a35ca0;
    }
  }
`;

const Contact = () => {
  return (
    <ContactSection>
      <h2>Let's work together!</h2>
      <ContactIcons>
        <a href="mailto:helwood245@gmail.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://www.linkedin.com/in/heather-elwood-4897b51b/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://bitbucket.org/helwood20/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faBitbucket} />
        </a>
        <a href="https://github.com/helwood" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://codepen.io/helwood20/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faCodepen} />
        </a>
      </ContactIcons>
    </ContactSection>
  );
};

export default Contact;
