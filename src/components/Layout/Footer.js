import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <div className="bg-dark p-3 text-light ">
        <p className="font-weight-light">
          BloomBurger Inc, {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
