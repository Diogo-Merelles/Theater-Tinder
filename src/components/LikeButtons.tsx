// src/components/SwipeButtons.tsx
import React from 'react';

interface SwipeButtonsProps {
  onLike: () => void;
  onDislike: () => void;
}

const SwipeButtons: React.FC<SwipeButtonsProps> = ({ onLike, onDislike }) => {
  return (
    <div className="swipe-buttons">
      <button onClick={onDislike}>Dislike</button>
      <button onClick={onLike}>Like</button>
    </div>
  );
};

export default SwipeButtons;
