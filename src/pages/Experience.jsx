import React from "react";
import Section from "../components/Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Computer Science Tutor</h3>
          <div className="subheading mb-3">Georgia State University</div>
          <p>
          <strong>Roles/Responsibilities</strong><br />
            <li>Delivered instruction for courses like Foundations of Computer Science, Object-Oriented Programming, and Data Structures.</li>
            <li>Developed and implemented engaging lesson plans and assignments, enhancing student understanding and performance.</li>
            <li>Provided one-on-one tutoring and support, addressing individual student needs and improving overall academic achievement.</li>
          </p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">September 2024 - Present</span>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Data Engineering Intern</h3>
          <div className="subheading mb-3">The Coca-Cola Company</div>
          <p>
            <strong>Roles/Responsibilities</strong><br />
            <li>Orchestrated media data ingestion using Scala and Spark within a Medallion ETL architecture.</li>
            <li>Automated data pipelines with Azure Synapse, reducing manual intervention by 30%.</li>
            <li>Conducted semantic and structural checks on over 500 CSV files, improving data accuracy by 20%.</li>
            <li>Engineered data processing workflows in Spark SQL, optimizing data accessibility and utilization.</li>
          </p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">June 2024 - August 2024</span>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Data Engineering Co-Op</h3>
          <div className="subheading mb-3">The Coca-Cola Company</div>
          <p>
          <strong>Roles/Responsibilities</strong><br />

            <li>Streamlined data workflows with Azure Data Factory and Databricks, achieving a 20% reduction in processing time.</li>
            <li>Developed and deployed ETL pipelines, enhancing operational efficiency.</li>
            <li>Integrated Workday SOAP API, optimizing data retrieval for over 30,000 employees.</li>
            <li>Created Power BI dashboards to communicate insights, aiding strategic decision-making.</li>
          </p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">May 2023 - May 2024</span>
        </div>
      </div>

    </Section>
  );
}
