import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #007bff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h1 {
    color: white;
    font-size: 1.5rem;
  }
`;

const NavItems = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;

const AppNameLink = styled(StyledLink)`
  font-size: 1.5rem;
  font-weight: bold;
  &:hover {
    text-decoration: none;
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavContainer>
      <AppNameLink to="/">Theater-Tinder</AppNameLink>
      <NavItems>
        <StyledLink to="/favorites">Favorites</StyledLink>
        <StyledLink to="/wallofshame">Wall of Shame</StyledLink>
        <StyledLink to="/search">Search</StyledLink>
      </NavItems>
    </NavContainer>
  );
};

export default Navbar;
