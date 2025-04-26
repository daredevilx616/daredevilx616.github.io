import React from "react"
import Section from "../components/Section"
import ResumePDF from "../assets/Resume.pdf"
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6"

const SocialIcon = ({ href, icon }) => {
  return (
    <a
      className="social-icon"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  )
}

export default function Home() {
  const icons = [
    {
      href: "https://www.linkedin.com/in/m-abdullah-nasir",
      icon: <FaLinkedinIn />,
    },
    {
      href: "https://github.com/daredevilx616",
      icon: <FaGithub />,
    },
    {
      href: "https://x.com/mabdullahnasir0",
      icon: <FaXTwitter />,
    },
    {
      href: "https://www.instagram.com/m.abdullahnasir",
      icon: <FaInstagram />,
    },
  ]

  return (
    <Section id="about">
      <div className='row justify-content-between'>
        <div className='col-md-6 order-last order-lg-first' data-aos='fade-up'>
          <h1 className="mb-0">
          Muhammad Abdullah
            <span className="text-primary" style={{paddingLeft: '2vw'}}>Nasir</span>
          </h1>
          <div className="subheading mb-3">
            <span style={{paddingRight: '0.3vw'}}>
              Do Something Great!
            </span>
            <span style={{paddingRight: '0.3vw'}}>
              ·
            </span>
            <a href="mailto:abdullahnasirpti@gmail.com" className='home-mail'>
              abdullahnasirpti@gmail.com
            </a>
          </div>
        </div>
      </div>

      <p className="lead mb-4">
      I am currently pursuing Masters in Computer Science student at Georgia State University with a strong focus on Data Engineering. My experience includes internships at Amazon and The Coca-Cola Company, where I honed my skills in building and automating data pipelines, optimizing data workflows, and enhancing data accuracy using Big Data technologies like Databricks, Azure Data Factory, and Spark SQL. Consistently recognized for my academic achievements, including twice making the Presidential List and four times on the Dean’s List, I am passionate about leveraging data to drive meaningful insights and solutions. With a strong foundation in Python, SQL, and Big Data tools, I am eager to contribute my skills and knowledge to impactful projects.
      </p>

      <div className="btn-group mb-5">
        <button
          className="btn btn-primary btn-custom py-2 px-5 CV-Button"
          type="submit"
          onClick={() => window.open(ResumePDF)}
        >
          Resume
        </button>
      </div>

      <div className="social-icons">
        {icons.map(({ href, icon }, index) => (
          <SocialIcon href={href} icon={icon} key={index} />
        ))}
      </div>
    </Section>
  )
}
