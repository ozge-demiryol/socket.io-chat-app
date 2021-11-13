import React from "react";
import { BiMessageAltDetail, BiLogOut } from "react-icons/bi";
import onlineIcon from "../../../icons/onlineIcon.png";

const ChatLeft = () => {
  return (
    <div className="chat__left">
      <div className="users__card">
        <div className="users__card-left">
          <BiMessageAltDetail />
          <h3 className="users__card-heading">Active Users</h3>
        </div>
        <BiLogOut />
      </div>
      <div className="users__info">
        <div className="users__info-left">
          <img
            className="user-avatar"
            src="https://i.pravatar.cc/30"
            alt="user-avatar"
          />
          <h4 className="users__info-heading">User Name</h4>
        </div>
        <img className="online-icon" src={onlineIcon} alt="online-icon" />
      </div>
      <hr />
    </div>
  );
};

export default ChatLeft;