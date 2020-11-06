interface IDataEmployee {
  id: number;
  avatarUrl: string;
  title: string;
  firstName: string;
  lastName: string;
  vote: number;
}

interface IDataProfile extends IDataEmployee {
  gender: string;
  email: string;
  phone: string;
  address: string;
}
