import React from "react";

import "./resume-page.css";
function ResumePage() {
  return (
    <div className="resume ">
      <a
        href="https://drive.google.com/file/d/1OGkDkhrVUmvWtQ1Io6Jky5_JYYLYRMtV/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <button className="resume__button">View (ENG)</button>
      </a>

      <a
        href="https://drive.google.com/file/d/1h_WlwRO0VpSGuL-Xz_YToINC70KMk6mw/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <button className="resume__button eng">View (RU)</button>
      </a>
    </div>
  );
}

export default ResumePage;
