import React, { useContext } from "react";
import styled from "styled-components";
import { Contact } from "../lib/layout";
import Button from "./Button";

const StyledContact = styled.div`
  margin: 10px;
`;

const Title = styled.p`
  font-family: "Montserrat", sans-serif;
  background-color: ${props => props.theme.accentColorTwo};
  border-radius: 4px;
  padding: 5px;
  font-weight: bold;
`;

const Link = styled.a`
  color: ${props => props.theme.accentColorOne};
  text-decoration: none;
`;

export default () => {
  return (
    <Contact>
      <StyledContact>
        <Button text="Download as a PDF" />
        <Title>Get in touch</Title>
        Want to work together and make something cool?
        <br />
        <br />
        Shoot me an email:{" "}
        <Link href="mailto:sam@shbgm.ca">sam[at]shbgm.ca</Link>
        <br />
        <br />
        I can also be found on:<br />
        <Link href="https://sam-writes.glitch.me/">Blog</Link>
        <br />
        <Link href="https://www.linkedin.com/in/sbgood/">LinkedIn</Link>
        <br />
        <Link href="https://github.com/shabegom">Github</Link>
        <br />
        <Link href="https://twitter.com/shabegom">Twitter</Link>
      </StyledContact>
    </Contact>
  );
};
