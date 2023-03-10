import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  return (
    <footer className="info">
      <p>Click to edit a todo</p>
      <p>
        Created by{" "}
        <a href="https://d12n.me/">
          Suleyman Dadashov && Rashad Khalilov && Qarayev Ferid
        </a>
      </p>
      <p>
        Part of <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
  );
};

export default Footer;
