import React, { FC } from 'react';

interface AvatarProps {
  rowData: IDataEmployee;
}

const Avatar: FC<AvatarProps> = ({ rowData }) => {
  const { avatarUrl, firstName, lastName } = rowData;
  const fullName = () => `${firstName} ${lastName}`;
  return <img src={avatarUrl} alt={fullName()} className="avatar" />;
};

export default Avatar;
