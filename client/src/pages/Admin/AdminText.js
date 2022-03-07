import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Imported Styled Components
import { PageHeading, SectionTitle } from "../../styled/typography";
import { SubmitButton } from "../../styled/forms";

const TextUpdateContainer = styled.div`
  width: 70%;
  margin: 0 auto 5rem;
`;

const UpdateInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledTextArea = styled.textarea`
  display: block;
  width: 60%;
  max-width: 800px;
  min-height: 150px;
  height: fit-content;
  margin: 0 auto;
  font-family: inherit;
  border-radius: 5px;
`;

const UpdateButton = styled(SubmitButton)`
  font-weight: 500;
  font-size: 1.4rem;
  width: fit-content;
`;

const AdminText = () => {
  const [aboutText, setAboutText] = useState("About Text");
  const [contactText, setContactText] = useState("Contact Text");
  const [pricingText, setPricingText] = useState("Pricing Text");
  const [hireText, setHireText] = useState("Hire Text");

  const setTexts = async () => {
    const res = await fetch("/api/text?name=all");
    const allTexts = await res.json();
    const about = allTexts.find((t) => t.name === "about").stored_text;
    const contact = allTexts.find((t) => t.name === "contact").stored_text;
    const pricing = allTexts.find((t) => t.name === "pricing").stored_text;
    const hire = allTexts.find((t) => t.name === "hire").stored_text;

    setAboutText(about);
    setContactText(contact);
    setPricingText(pricing);
    setHireText(hire);
  };
  useEffect(() => {
    setTexts();
    console.log("updated");
  }, []);
  return (
    <>
      <title>JG Admin | Site Text</title>
      <PageHeading>Site Text</PageHeading>
      <TextUpdateContainer>
        <SectionTitle color={"1"}>About Text</SectionTitle>
        <UpdateInner>
          <StyledTextArea
            value={aboutText}
            onChange={(e) => setAboutText(e.target.value)}
          />
          <UpdateButton color={"1"}>Update About</UpdateButton>
        </UpdateInner>

        <SectionTitle color={"2"}>Contact Text</SectionTitle>
        <UpdateInner>
          <StyledTextArea
            value={contactText}
            onChange={(e) => setContactText(e.target.value)}
          />
          <UpdateButton color={"2"}>Update Contact</UpdateButton>
        </UpdateInner>

        <SectionTitle color={"3"}>Pricing Text</SectionTitle>
        <UpdateInner>
          <StyledTextArea
            value={pricingText}
            onChange={(e) => setPricingText(e.target.value)}
          />
          <UpdateButton color={"3"}>Update Pricing</UpdateButton>
        </UpdateInner>

        <SectionTitle color={"1"}>Hire Text</SectionTitle>
        <UpdateInner>
          <StyledTextArea
            value={hireText}
            onChange={(e) => setHireText(e.target.value)}
          />
          <UpdateButton color={"1"}>Update Hire</UpdateButton>
        </UpdateInner>
      </TextUpdateContainer>
    </>
  );
};

export default AdminText;
