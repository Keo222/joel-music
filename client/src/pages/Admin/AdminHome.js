import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled Elements

const Admin = () => {
  return (
    <div>
      <Link to="/admin/tracks">Tracks</Link>
      <Link to="/admin/text">Text</Link>
    </div>
  );
};

export default Admin;
