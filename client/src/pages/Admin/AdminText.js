import React from "react";
import styled from "styled-components";

const TextHeader = styled.h1`
  color: ${(props) => props.theme.color.textLight};
  text-align: center;
`;

const AdminText = () => {
  return (
    <>
      <title>JG Admin | Site Text</title>
      <TextHeader>Site Text</TextHeader>
    </>
  );
};

export default AdminText;
