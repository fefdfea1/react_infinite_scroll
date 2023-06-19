import React from "react";

export default function Header_button({ category, title }) {
  return (
    <li className="ml-4">
      <button>{title}</button>
    </li>
  );
}
