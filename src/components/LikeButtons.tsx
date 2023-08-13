// src/components/SwipeButtons.tsx
import React from 'react';
import styled from "styled-components";

const TinderButtons = styled.div`
  margin: 0;
  padding: 0;
`;

interface SwipeButtonsProps {
  onLike: () => void;
  onDislike: () => void;
}



const SwipeButtons: React.FC<SwipeButtonsProps> = ({ onLike, onDislike }) => {
  return (
    <div className="swipe-buttons">
      <TinderButtons onClick={onDislike}>Dislike</TinderButtons>
      <TinderButtons onClick={onLike}>Like</TinderButtons>
    </div>
  );
};

export default SwipeButtons;
