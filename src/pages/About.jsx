import React from "react";
import { Link } from "react-router-dom";
import One from "../components/About/One";
import Two from "../components/About/Two";
import Three from "../components/About/Three";
import Four from "../components/About/Four";
import Five from "../components/About/Five";
import Six from "../components/About/Six";
import Seven from "../components/About/Seven";

export default function Component() {
  return (
    <>
      <One />
      <Two />
      <Three />
      <Five/>

      <Four/>
      <Six/>
      {/* <Seven/> */}
    </>
  );
}
