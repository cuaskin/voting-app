import React, { FC } from 'react';
import Avatar from 'components/Avatar';
import Label from 'components/Label';

interface ProfileProps {
  data: IDataProfile;
}

const Profile: FC<ProfileProps> = ({ data }) => {
  return (
    <div className="profile">
      <Avatar rowData={data} />
      <h3>{` ${data.firstName} ${data.lastName}`}</h3>
      <div className="profile-details">
        <Label label={'Title:'} />
        {data.title}
        <Label label={'Email:'} />
        {data.email}
        <Label label={'Phone:'} />
        {data.phone} <Label label={'Gender:'} />
        {data.gender}
        <Label label={'Adress:'} />
        {data.address}
        <Label label={'Vote:'} />
        {`${data.vote}`}
      </div>
    </div>
  );
};

export default Profile;
