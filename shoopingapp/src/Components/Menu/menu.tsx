import React from "react";

interface IProps {
  username: string;
}

function Menu({ username }: IProps) {
  return (
    <div>
      <h1>Hi</h1>
      <h6>User: {username}</h6>
    </div>
  );
}

export default Menu;