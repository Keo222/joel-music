import React from "react";
import styled from "styled-components";

const PageHeader = styled.h1`
  text-align: center;
  font-size: 4.5rem;
  font-weight: 200;
  color: ${(props) => props.theme.color.highlight2};
  letter-spacing: 1.6rem;
  margin: 3vh 0;
`;

const AdminText = () => {
  return (
    <>
      <title>JG Admin | Site Text</title>
      <PageHeader>Site Text</PageHeader>
    </>
  );
};

export default AdminText;
