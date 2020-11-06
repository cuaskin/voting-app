import React, { FC } from 'react';

interface VoteProps {
  onClick(): void;
}

const Vote: FC<VoteProps> = ({ onClick }) => {
  return (
    <button className="vote-btn" onClick={onClick}>
      Vote
    </button>
  );
};

export default Vote;
