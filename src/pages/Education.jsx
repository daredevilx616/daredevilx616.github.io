import React from "react";
import Section from "../components/Section";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Georgia State University</h3>
          <div className="subheading mb-3">Bachelor of Science in Computer Science</div>
          <div>Data Structures, Software Engineering, Machine Learning, Database Systems, Big Data</div>
          <p>GPA: 3.85</p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">August 2021 - Present</span>
        </div>
      </div>
    </Section>
  );
}
