import React from "react"
import Section from "../components/Section"
import Skill from "../components/Skill"
import { SiAndroidstudio, SiAzuredevops, SiAzurepipelines, SiDatabricks, SiCss3, SiDart, SiDocker, SiFirebase, SiFlask, SiFlutter, SiGit, SiGithub, SiHtml5, SiIntellijidea, SiJavascript, SiJupyter, SiKubernetes, SiMongodb, SiPostgresql, SiPostman, SiPython, SiReact, SiVisualstudiocode, SiJava, SiDjango, SiRubyonrails, SiMicrosoftazure, SiMicrosoftsqlserver } from "react-icons/si"
import { DiJava, DiMysql, DiScala } from 'react-icons/di'

const Skills = () => {

  let data = {
    skills: [
      {
        title: "Python",
        progress: "80%",
      },
      {
        title: "Scala",
        progress: "75%",
      },
      {
        title: "Java",
        progress: "75%",
      }, 
      {
        title: "C / C++",
        progress: "65%",
      },
      {
        title: "Javascript",
        progress: "60%",
      },
      {
        title: "HTML",
        progress: "80%",
      },
      {
        title: "CSS",
        progress: "80%",
      },      
      {
        title: "Dart",
        progress: "65%",
      },
    ],
    frameworks: [
      {
        title: "PySpark",
        progress: "80%",
      },
      {
        title: "React.js",
        progress: "70%",
      },
      {
        title: "Flutter",
        progress: "85%",
      },
      {
        title: "Flask",
        progress: "70%",
      },
      {
        title: "Django",
        progress: "50%",
      }
    ],
  }

  const { skills, frameworks } = data

  const skillsJsx = skills.map((skill, index) => (
    <div className="col-md-8 py-1" key={index}>
      <Skill skill={skill} />
    </div>
  ))

  const frameworksJsx = frameworks.map((skill, index) => (
    <div className="col-md-8 py-1" key={index}>
      <Skill skill={skill} secondary />
    </div>
  ))


  const SocialIcon = ({ icon }) => {
    return (
      <div
        className="list-inline-item dev-icons"
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
      </div>
    )
  }

  const iconsSet1 = [
    {
      icon: <SiGit />,
    },
    {
      icon: <SiGithub />,
    },
    {
      icon: <SiAzuredevops />,
    },
  ]

  const iconsSet2 = [
    {
      icon: <SiPython />,
    },
    {
      icon: <DiJava />,
    },
    {
      icon: <DiScala/>
    },
    {
      icon: <SiDart />,
    },
    {
      icon: <SiJavascript />,
    },
    {
      icon: <SiRubyonrails />,
    },
    {
      icon: <DiMysql />,
    },
  ]

  const iconsSet3 = [
    {
      icon: <SiFlask />,
    },
    {
      icon: <SiFlutter />,
    },
    {
      icon: <SiDjango />,
    },
  ]

  const iconsSet4 = [
    {
      icon: <SiHtml5 />,
    },
    {
      icon: <SiCss3 />,
    },
    {
      icon: <SiReact />,
    }
  ]

  const iconsSet5 = [   
    {
      icon: <SiMicrosoftazure />,
    },    
    {
      icon: <SiDatabricks />,
    },    
    {
      icon: <SiMicrosoftsqlserver />,
    },
    {
      icon: <DiMysql />,
    },
    {
      icon: <SiMongodb />,
    },
    {
      icon: <SiPostgresql />,
    },
    {
      icon: <SiFirebase />,
    },
    {
      icon: <SiDocker />,
    },
    {
      icon: <SiKubernetes />,
    },
  ]

  const iconsSet6 = [
    {
      icon: <SiVisualstudiocode />,
    },
    {
      icon: <SiJupyter />,
    },
    {
      icon: <SiIntellijidea />,
    },
    {
      icon: <SiAndroidstudio/>,
    },
    {
      icon: <SiPostman />,
    },
  ]

  return (
    <Section id="skills" title="Skills">
      <div className="subheading mb-3">Coding Languages</div>
      <div className="row mb-4">{skillsJsx}</div>
      <div className="subheading mb-3">Frameworks / Libraries</div>
      <div className="row mb-4">{frameworksJsx}</div>
      <div className="subheading mb-3">Programming Languages, Tools & Technologies</div>
      <div>
        {iconsSet1.map(({ icon }, index) => (
          <SocialIcon icon={icon} key={index} />
        ))}
      </div>
      <div>
        {iconsSet2.map(({ icon }, index) => (
          <SocialIcon icon={icon} key={index} />
        ))}
      </div>
      <div>
        {iconsSet3.map(({ icon }, index) => (
          <SocialIcon icon={icon} key={index} />
        ))}
      </div>
      <div>
        {iconsSet4.map(({ icon }, index) => (
          <SocialIcon icon={icon} key={index} />
        ))}
      </div>
      <div>
        {iconsSet5.map(({ icon }, index) => (
          <SocialIcon icon={icon} key={index} />
        ))}
      </div>
      <div>
        {iconsSet6.map(({ icon }, index) => (
          <SocialIcon icon={icon} key={index} />
        ))}
      </div>
    </Section>
  )
}

export default Skills
