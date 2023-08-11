import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 1rem 2rem;
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
            <AppNameLink to="/">MovieTinder</AppNameLink>
            <NavItems>
                <StyledLink to="/favorites">Favorites</StyledLink>
                <StyledLink to="/wallofshame">Wall of Shame</StyledLink>
                <StyledLink to="/search">Search</StyledLink>
            </NavItems>
        </NavContainer>
    );
};

export default Navbar;

