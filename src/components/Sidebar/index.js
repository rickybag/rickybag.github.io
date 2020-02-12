import React from "react";

import Social from "./Social";
import Nav from "./Nav";

const Switch = () => {
  return (
    <label className="switch">
      <input type="checkbox" onChange={e => console.log(e.target.checked)} />
      <span className="slider round" />
    </label>
  );
};

const Sidebar = ({ name, avatar, bio, social, navigation }) => {
  return (
    <div className="sidebar">
      <h1 className="name">{name}</h1>
      <img className="avatar" src={avatar} alt={name} />
      <p className="bio">{bio}</p>
      <Social social={social} />
      <Nav navItems={navigation} />
    </div>
  );
};

export default Sidebar;
