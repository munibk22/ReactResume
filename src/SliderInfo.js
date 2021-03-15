import React from "react";

export default function SliderInfo() {
  return (
    <div>
      <div
        className="absolute marginautomod "
        style={{
          color: "white",
          marginLeft: "7%",
          marginTop: "-15px",
          zIndex: "3",
        }}
      >
        <p></p>
        <h1>
          <strong>Hello World</strong>{" "}
        </h1>
      </div>
      <div
        className="container absolutebottom relativeb"
        style={{
          zIndex: "3",
          maxWidth: "800px",
          textAlign: "center",
        }}
      >
        <h1> Munib Khan Resume</h1>
        <p>
          Non ex amet id officia sunt ipsum irure velit ut labore. Ea aliquip
          incididunt labore qui deserunt eu minim pariatur consequat proident.
          Aliquip incem amet sunt. In sunt laborum fugiat consectetur magna
          incididunt culpa aliqua nostrud exercitation sint commodo quis.
        </p>
        <button className="btn btn-lg btn-success " disabled></button>
        <button className="btn btn-lg btn-primary " disabled></button>
        <button className="btn btn-lg btn-danger " disabled></button>
      </div>
    </div>
  );
}
