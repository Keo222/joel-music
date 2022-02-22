import React from "react";
import styled from "styled-components";

// Styled Elements
const ContactHeader = styled.h1`
  text-align: center;
  font-size: 6rem;
  font-weight: 200;
  color: ${(props) => props.theme.color.highlight2};
  letter-spacing: 1.6rem;
  margin: 6vh 0 0;
`;

const ContactContainer = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 6vh auto 3vh;
  transform: translateX(-80px);
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  color: ${(props) => props.theme.color.textLight};
  font-size: 1.6rem;
  line-height: 2.5rem;
`;

const Label = styled.label`
  text-align: right;
  margin-right: 3rem;
  grid-row-start: ${(props) => props.rowStart};
  grid-row-end: ${(props) => props.rowEnd};
  grid-column-start: ${(props) => props.colStart};
  grid-column-end: ${(props) => props.colEnd};
`;
const Input = styled.input`
  margin-bottom: 2rem;
  grid-row-start: ${(props) => props.rowStart};
  grid-row-end: ${(props) => props.rowEnd};
  grid-column-start: ${(props) => props.colStart};
  grid-column-end: ${(props) => props.colEnd};
`;

const StyledSelect = styled.select`
  height: 2.5rem;
  grid-row-start: ${(props) => props.rowStart};
  grid-row-end: ${(props) => props.rowEnd};
  grid-column-start: ${(props) => props.colStart};
  grid-column-end: ${(props) => props.colEnd};
`;
const StyledTextArea = styled.textarea`
  grid-row-start: ${(props) => props.rowStart};
  grid-row-end: ${(props) => props.rowEnd};
  grid-column-start: ${(props) => props.colStart};
  grid-column-end: ${(props) => props.colEnd};
  height: 15rem;
`;

const SubmitBtn = styled.button`
  display: block;
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${(props) => props.theme.color.textDark};
  padding: 1.5rem 4rem;
  border-radius: 5px;
  background: ${(props) => props.theme.color.highlight1};
  margin: 5rem auto;
  border: none;
  transition: all 0.3s;
  cursor: pointer;
  &:hover,
  &:active {
    filter: brightness(0.7);
  }
`;

const Contact = () => {
  return (
    <div>
      <title>Joel Gardella | Contact</title>
      <ContactHeader>Contact</ContactHeader>
      <ContactContainer>
        <Label htmlFor="name">Name:</Label>
        <Input type="text" name="name" id="name" />
        <Label
          rowStart={1}
          rowEnd={3}
          colStart={3}
          background="blue"
          htmlFor="work"
        >
          Work:
        </Label>
        <StyledSelect
          type="select"
          name="work"
          id="work"
          rowStart={1}
          rowEnd={3}
          colStart={4}
        >
          <option value="Mix">Mix</option>
          <option value="Master">Master</option>
          <option value="Mix/Master">Mix & Master</option>
        </StyledSelect>
        <Label htmlFor="email">Email:</Label>
        <Input type="email" name="email" id="email" />
        <Label htmlFor="subject">Subject:</Label>
        <Input
          colStart={2}
          colEnd={-1}
          type="text"
          name="subject"
          id="subject"
        />
        <Label htmlFor="message">Message:</Label>
        <StyledTextArea colStart={2} colEnd={-1} />
      </ContactContainer>
      <SubmitBtn>Submit</SubmitBtn>
    </div>
  );
};

export default Contact;
