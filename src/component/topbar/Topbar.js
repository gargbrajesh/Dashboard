import React, { useState } from "react";
import "./topbar.css";
import "./SimpleMenu"
import { Button } from "@material-ui/core";
import SimpleMenu from "./SimpleMenu";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">CodersArts</span>
        </div>
        <div className="topRight">
          <Button color="inherit" className="btn">LogOut</Button>
          <SimpleMenu />
        </div>
      </div>
    </div>
  );
}
