import React from "react";
import {FaAlignCenter, FaGithub} from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div class="social-container">
      <a href="https://github.com/seltow"
        className="socialMedia">
        <FaGithub size = "60" style = {{FaAlignCenter}}/>
      </a>
    </div>
  );
}