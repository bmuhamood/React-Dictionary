import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a href="https://www.bbosamuhamood.me" target="__blank">
          Bbosa Muhamood
        </a>
      </span>
    </div>
  );
};

export default Footer;