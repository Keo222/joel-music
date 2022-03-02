import React from "react";
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
const StyledTextArea = styled.textarea`
  height: 15rem;
  width: 100%;
`;

const Contact = () => {
  return (
    <div>
      <title>Joel Gardella | Contact</title>
      <PageHeading>Contact</PageHeading>
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
