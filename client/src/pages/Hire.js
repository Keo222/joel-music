import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Imported Stylec Components
import {
  PageHeading,
  BoldSpan,
  SmallFormattedParagraph,
} from "../styled/typography";
import { GridForm, GridSubmitButton } from "../styled/forms";

// Styled Elements
const InfoTextDiv = styled.div`
  min-width: 200px;
  width: 60%;
  max-width: 700px;
  border: 2px solid ${(props) => props.theme.color.highlight2};
  border-radius: 10px;
  margin: 0 auto;
`;

const Label = styled.label`
  text-align: right;
  margin-right: 1rem;
  grid-row-start: ${(props) => props.rowStart};
  grid-row-end: ${(props) => props.rowEnd};
  grid-column-start: ${(props) => props.colStart};
  grid-column-end: ${(props) => props.colEnd};
  @media screen and (${(props) => props.theme.responsive.sm}) {
    grid-row: unset;
    grid-column: unset;
  }
  @media screen and (${(props) => props.theme.responsive.xs}) {
    text-align: left;
  }
`;
const Input = styled.input`
  margin-bottom: 2rem;
  grid-row-start: ${(props) => props.rowStart};
  grid-row-end: ${(props) => props.rowEnd};
  grid-column-start: ${(props) => props.colStart};
  grid-column-end: ${(props) => props.colEnd};
  @media screen and (${(props) => props.theme.responsive.sm}) {
    grid-row: unset;
    grid-column: unset;
  }
`;

const StyledSelect = styled.select`
  height: 2.5rem;
  margin-bottom: 2rem;
  grid-row-start: ${(props) => props.rowStart};
  grid-row-end: ${(props) => props.rowEnd};
  grid-column-start: ${(props) => props.colStart};
  grid-column-end: ${(props) => props.colEnd};
  @media screen and (${(props) => props.theme.responsive.sm}) {
    grid-row: unset;
    grid-column: unset;
  }
`;
const StyledTextArea = styled.textarea`
  grid-row-start: ${(props) => props.rowStart};
  grid-row-end: ${(props) => props.rowEnd};
  grid-column-start: ${(props) => props.colStart};
  grid-column-end: ${(props) => props.colEnd};
  height: 15rem;
  @media screen and (${(props) => props.theme.responsive.sm}) {
    grid-row: unset;
    grid-column: unset;
  }
`;

const EstimatedCost = styled.p`
  color: ${(props) => props.theme.color.textLight};
  text-align: right;
  font-size: 2.2rem;
  font-weight: 300;
  display: block;
  grid-column-start: 3;
  grid-column-end: -1;
  @media screen and (${(props) => props.theme.responsive.sm}) {
    grid-column: 1 / -1;
  }
`;

const Hire = () => {
  const [text, setText] = useState([]);
  const [numTracks, setNumTracks] = useState(1);
  const [work, setWork] = useState("Mix");

  useEffect(() => {
    const getText = async () => {
      const fetch_url = "/api/text?name=hire";
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

  const handleWorkType = (work) => {
    switch (work) {
      case "Mix":
        return "Mix";
      case "Master":
        return "Master";
      case "MixMaster":
        return "Mix/Master";
      default:
        return "Mix";
    }
  };

  useEffect(() => {
    const queries = window.location.search;
    const params = new URLSearchParams(queries);

    const tracksParam = params.get("tracks");
    const workParam = params.get("work");

    if (tracksParam) {
      setNumTracks(parseInt(tracksParam));
    }
    if (workParam) {
      setWork(handleWorkType(workParam));
    }
  }, []);

  return (
    <>
      <title>Joel Gardella | Hire</title>
      <PageHeading>Hire</PageHeading>
      <InfoTextDiv>
        {text.map((p, i) => (
          <SmallFormattedParagraph key={i}>{p}</SmallFormattedParagraph>
        ))}
      </InfoTextDiv>
      <GridForm>
        <Label htmlFor="name">Name:</Label>
        <Input type="text" name="name" id="name" />
        <Label rowStart={1} rowEnd={2} colStart={3} htmlFor="work">
          Work:
        </Label>
        <StyledSelect
          type="select"
          name="work"
          id="work"
          rowStart={1}
          rowEnd={2}
          colStart={4}
          value={work}
          onChange={(e) => setWork(e.target.value)}
        >
          <option value="Mix">Mix</option>
          <option value="Master">Master</option>
          <option value="Mix/Master">Mix & Master</option>
        </StyledSelect>
        <Label rowStart={2} rowEnd={3} colStart={3} htmlFor="numSongs">
          Tracks:
        </Label>
        <StyledSelect
          type="select"
          name="numSongs"
          id="numSongs"
          rowStart={2}
          rowEnd={3}
          colStart={4}
          value={numTracks}
          onChange={(e) => setNumTracks(e.target.value)}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
        </StyledSelect>
        <Label htmlFor="email">Email:</Label>
        <Input type="email" name="email" id="email" />
        <Label htmlFor="subject" rowStart={3}>
          Subject:
        </Label>
        <Input
          colStart={2}
          colEnd={-1}
          type="text"
          name="subject"
          id="subject"
        />
        <Label htmlFor="message">Message:</Label>
        <StyledTextArea colStart={2} colEnd={-1} />
        <EstimatedCost>
          <BoldSpan>Estimate:</BoldSpan> ${numTracks * 10000}.00
        </EstimatedCost>
        <GridSubmitButton>Submit</GridSubmitButton>
      </GridForm>
    </>
  );
};

export default Hire;
