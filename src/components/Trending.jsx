import React from "react";

export default function Component() {
  return (
    <>

      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  outline: none;
  line-height: 1.15;
  font-family: sans-serif;
  text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-size: 100%;
  overflow-x: hidden;
}

body {
  box-sizing: border-box;
  outline: none;
  line-height: 1.42857;
  background-color: rgb(255, 255, 255);
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  width: 100%;
  color: rgba(0, 0, 0, 0.8);
}
`,
        }}
      />
    </>
  );
}
