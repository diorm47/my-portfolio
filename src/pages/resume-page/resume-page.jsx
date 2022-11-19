import React, { useEffect } from "react";
import "./resume-page.css";
import AOS from "aos";
import "aos/dist/aos.css";

function ResumePage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="resume ">
      <a
        href="https://drive.google.com/file/d/1OGkDkhrVUmvWtQ1Io6Jky5_JYYLYRMtV/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <button
          className="resume__button"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          View (ENG)
        </button>
      </a>

      <a
        href="https://drive.google.com/file/d/1h_WlwRO0VpSGuL-Xz_YToINC70KMk6mw/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <button
          className="resume__button eng"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          View (RU)
        </button>
      </a>
    </div>
  );
}

export default ResumePage;
