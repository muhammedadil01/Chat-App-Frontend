import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

function ChatArea({ props }) {
  console.log(props);
  return (
    <div className="chatarea-container">
      <div className="chatArea-header">
        <p className="con-icon">{props.name[0]}</p>
        <div className="header-text">
          <p className="con-title">{props.name}</p>
          <p className="con-timeStamp">{props.timeStamp}</p>
        </div>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
      <div className="messages-container">Messages-Container</div>
      <div className="text-input-area">text-input-area</div>
    </div>
  );
}

export default ChatArea;
