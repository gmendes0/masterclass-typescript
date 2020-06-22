import React from "react";

interface IUser {
  name: string;
  email: string;
}

interface IProps {
  user: IUser;
}

const User: React.FC<IProps> = ({ user }) => {
  return (
    <div>
      <p>
        <strong>Nome: </strong> {user.name}
      </p>
      <p>
        <strong>Email: </strong> {user.email}
      </p>
    </div>
  );
};

export default User;
