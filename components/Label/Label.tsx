import React, { FC } from 'react';

interface LabelProps {
  label: string;
}

const Label: FC<LabelProps> = ({ label }) => {
  return <span>{label}</span>;
};

export default Label;
