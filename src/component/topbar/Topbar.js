import React from "react";
import "./topbar.css";

import { Button } from "@material-ui/core";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">CodersArts</span>
        </div>
        <div className="topRight">
          <Button color="inherit" >LogOut</Button>
        </div>
      </div>
    </div>
  );
}
