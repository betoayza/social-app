import React, { useState } from "react";
import { users } from "../../models/db";

export const Profile = () => { 
  const user = users[0]; 
  
  return (
    <div className={"border form-control"}>
      <img src="" className="img-fluid rounded-top" alt="coverPhoto" />
      <br />
      <img src="" className="img-fluid rounded-top" alt="ProfilePhoto" />
      <h2>@{user.username}</h2>
      <p>{user.biography}</p>
      <p>Registered: {user.registrationDate}</p>
      <p>Following {user.following}</p>
      <p>Followers {user.followers}</p>
    </div>
  );
};
