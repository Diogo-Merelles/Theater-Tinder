import React from 'react';
import styled from 'styled-components';

interface SwipeButtonsProps {
  onLike: () => void;
  onDislike: () => void;
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const LikeButtons: React.FC<SwipeButtonsProps> = ({ onLike, onDislike }) => {
  return (
    <ButtonContainer>
      <button onClick={onDislike}>Dislike</button>
      <button onClick={onLike}>Like</button>
    </ButtonContainer>
  );
};

export default LikeButtons;
