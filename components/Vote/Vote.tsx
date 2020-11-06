import React, { FC } from 'react';

interface VoteProps {}

const Vote: FC<VoteProps> = () => {
  return <button className="vote-btn">Vote</button>;
};

export default Vote;
