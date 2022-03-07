import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Imported Styled Components
import { PageHeading } from "../styled/typography";
import {
  StyledForm,
  InputGroup,
  InputLabel,
  TextInput,
  SubmitButton,
} from "../styled/forms";

// Styled Components
const ContactInfoTextDiv = styled.div`
  min-width: 200px;
  width: 60%;
  max-width: 700px;
  border: 2px solid ${(props) => props.theme.color.highlight3};
  border-radius: 10px;
  margin: 0 auto 3rem;
`;
const InfoText = styled.p`
  color: ${(props) => props.theme.color.textLight};
  padding: 0 1rem;
  font-size: 1.4rem;
`;

const StyledTextArea = styled.textarea`
  height: 15rem;
  width: 100%;
`;

const Contact = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const getText = async () => {
      const fetch_url = "/api/text?name=contact";
      try {
        const response = await fetch(fetch_url);
        const { stored_text } = await response.json();
        setText(stored_text);
      } catch (err) {
        console.error(err);
      }
    };
    getText();
  }, []);
  return (
    <div>
      <title>Joel Gardella | Contact</title>
      <PageHeading>Contact</PageHeading>
      <ContactInfoTextDiv>
        <InfoText>{text}</InfoText>
      </ContactInfoTextDiv>
      <StyledForm>
        <InputGroup>
          <InputLabel htmlFor="name">Name:</InputLabel>
          <TextInput type="text" name="name" id="name" />
        </InputGroup>

        <InputGroup>
          <InputLabel htmlFor="email">Email:</InputLabel>
          <TextInput type="email" name="email" id="email" />
        </InputGroup>

        <InputGroup>
          <InputLabel htmlFor="subject">Subject:</InputLabel>
          <TextInput type="text" name="subject" id="subject" />
        </InputGroup>

        <InputGroup>
          <InputLabel htmlFor="message">Message:</InputLabel>
          <StyledTextArea />
        </InputGroup>
        <SubmitButton>Submit</SubmitButton>
      </StyledForm>
    </div>
  );
};

export default Contact;
