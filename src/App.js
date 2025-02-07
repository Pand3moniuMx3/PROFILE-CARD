import React, { useEffect, useReducer, useState } from "react";
import "./App.css";
import "./styles/Profile.css";
import "./styles/Skills.css";
import "./styles/Projects.css";
import "./styles/Experience.css";
import "./styles/Tabs.css";
import devData from "./data/dev.json";
import animatorData from "./data/animator.json";
import { useId } from "./context/IdContext";

const tabs = [
  {
    id: 1,
    title: "Web Developer",
  },
  {
    id: 2,
    title: "Motion Graphics Designer",
  },
];

export default function App() {
  const { generateUniqueId } = useId();

  const [activeTab, setActiveTab] = useState(1);

  let array;
  if (activeTab === 1) {
    array = {
      ...devData,
      projects: devData.projects.map((project) => ({
        ...project,
        id: generateUniqueId(),
      })),
    };
  } else if (activeTab === 2) {
    array = {
      ...animatorData,
      projects: animatorData.projects.map((project) => ({
        ...project,
        id: generateUniqueId(),
      })),
    };
  }

  return (
    <>
      <section>
        <div className="tab-container">
          {tabs.map((tab) => (
            <p
              className="tab"
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </p>
          ))}
          <span
            className="tab-indicator"
            style={{
              inset:
                (activeTab === 1 && "6px 50% 6px 6px") ||
                (activeTab === 2 && "6px 6px 6px 50%"),
            }}
          />
        </div>
        <div className="profile-card">
          <aside className="col span-1">
            <Profile text={array.text} />
            <Skills skills={array.skills} />
          </aside>
          <main className="col span-2">
            <About />
            <h3>Projects</h3>
            <Projects projects={array.projects} activeTab={activeTab} />
            <h3>Experience</h3>
            <Experience referrals={array.referrals} />
          </main>
        </div>
      </section>
    </>
  );
}

function Profile({ text }) {
  const initialState = {
    status: "missing",
    name: "",
    email: "",
    request: "",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "set/name":
        return {
          ...state,
          name: action.payload,
        };
      case "set/email":
        return {
          ...state,
          email: action.payload,
        };
      case "set/request":
        return {
          ...state,
          request: action.payload,
        };
      case "input/complete":
        return {
          ...state,
          status: "complete",
        };
      default:
        throw new Error("undefined action");
    }
  }

  // socials array
  const contact = [
    {
      id: 1,
      title: "Github",
      at: "Pand3moniuMx3",
      icon: "/images/github-icon.png",
    },
    {
      id: 2,
      title: "Discord",
      at: "@holy_swagg",
      icon: "/images/discord-icon.png",
    },
    {
      id: 3,
      title: "Linkedin",
      at: "mateusz-mirecki",
      icon: "/images/linkedin-icon.png",
    },
  ];

  // contact tab toggle logic
  const [isContactOpen, setIsContactOpen] = useState(false);
  const handleToggleContact = () => {
    setIsContactOpen((s) => !s);
  };

  // input state
  const [{ status, name, email, request }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    name && email && request && dispatch({ type: "input/complete" });
  }, [name, email, request]);

  if (!isContactOpen)
    return (
      <div className="profile-component component flex">
        <div className="img-wrapper">
          <img
            src="images/pfp.jpg"
            alt="Me, sitting on a mountain near Passe Giau, Italy"
          />
        </div>
        <div className="info-wrapper">
          <h2>Mateusz Mirecki</h2>
          <p>{text.role}</p>
          <p>{text.description}</p>
          <button
            className="btn"
            style={{ width: "100%", marginTop: "var(--inner-gap)" }}
            onClick={handleToggleContact}
          >
            Contact me
          </button>
        </div>
        <div className="contact-wrapper">
          {contact.map((contact) => (
            <div className="contact" key={contact.id}>
              <img src={contact.icon} alt={contact.title} />
              <p>{contact.at}</p>
            </div>
          ))}
        </div>
      </div>
    );

  if (isContactOpen)
    return (
      <form
        className="profile-component component flex"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input
          type="hidden"
          name="access_key"
          value="2529292a-9240-45fa-99a3-ad34bca3a1c8"
        ></input>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) =>
            dispatch({ type: "set/name", payload: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) =>
            dispatch({ type: "set/email", payload: e.target.value })
          }
        />
        <textarea
          placeholder="Describe your request..."
          name="request"
          value={request}
          onChange={(e) =>
            dispatch({ type: "set/request", payload: e.target.value })
          }
        />
        <div className="contact-btns">
          <span className="return-btn" onClick={handleToggleContact}>
            <img src="/icons/return-icon.svg" alt="go back" />
          </span>
          <button
            type="submit"
            className={`btn ${status === "missing" && "blocked"}`}
          >
            SEND
          </button>
        </div>
      </form>
    );
}

function Skills({ skills }) {
  return (
    <div className="skills-component component flex">
      <h2>Skills</h2>
      <div className="skills-wrapper">
        {skills.map((skill) => (
          <Skill skill={skill} />
        ))}
      </div>
    </div>
  );
}

function Skill({ skill }) {
  return <p className="skill">{skill}</p>;
}

function About() {
  return (
    <div className="about-component component flex">
      <h2>About me</h2>
      <p>
        Hi, I'm Mateusz Mirecki. I'm a self-taught SEO specialist turned web
        developer. I build websites that draw attention and provide real value
        to visitors and customers.
      </p>
      <p>
        Let enchance your website with{" "}
        <b style={{ fontSize: "16px" }}>"beauty that converts"</b>. Leave a
        lasting impression on your prospects and collect profits.
      </p>
    </div>
  );
}

function Projects({ projects, activeTab }) {
  const shortArray = projects.slice(0, 4);

  const [isExpanded, setIsExpanded] = useState(false);

  function handleArrayLength() {
    setIsExpanded((prevState) => !prevState);
  }

  return (
    <>
      <div className="projects-component">
        {(isExpanded ? projects : shortArray).map((project) => (
          <Project key={project.id} project={project} activeTab={activeTab} />
        ))}
      </div>
      <p
        style={{ alignSelf: "end", fontSize: "14px", cursor: "pointer" }}
        onClick={handleArrayLength}
      >
        {isExpanded ? "Show less" : "Show more"}
      </p>
    </>
  );
}

function Project({ project, activeTab }) {
  return (
    <div className="project" key={project.id}>
      <b>{project.title}</b>
      <p>{project.description}</p>
      <div className="data">
        {activeTab === 1 && (
          <div className="tech">
            <span
              className="marker"
              style={{
                background:
                  project.tech === "React"
                    ? "var(--clr-react)"
                    : project.tech === "JavaScript"
                    ? "var(--clr-js)"
                    : project.tech === "CSS"
                    ? "var(--clr-css)"
                    : project.tech === "WordPress"
                    ? "var(--clr-wp)"
                    : project.tech === "HTML"
                    ? "var(--clr-html)"
                    : "transparent",
              }}
            ></span>
            <p style={{ fontSize: "14px" }}>{project.tech}</p>
          </div>
        )}
        {activeTab === 2 && (
          <div className="tech">
            {project.tech.map((tech) => (
              <img src={tech} alt="tech" />
            ))}
          </div>
        )}
        <a className="link" href={project.url}>
          <p>View Project</p>
          <img src="/images/linking-icon.png" alt="visit site" />
        </a>
      </div>
    </div>
  );
}

function Experience({ referrals }) {
  return (
    <div className="experience-component component flex">
      {referrals.map((referral) => (
        <Referral
          id={referral.id}
          company={referral.company}
          companyLogo={referral.companyLogo}
          position={referral.position}
          timeframe={referral.timeframe}
          referral={referral.referral}
          examples={referral.examples}
        />
      ))}
    </div>
  );
}

function Referral({
  id,
  company,
  companyLogo,
  position,
  timeframe,
  referral,
  examples,
}) {
  return (
    <>
      <div className="referral" key={id}>
        <div className="company-info">
          <div className="img-wrapper">
            <img src={companyLogo} alt={company} />
          </div>
          <div>
            <b>{position}</b>
            <p>{company}</p>
          </div>
        </div>
        <div className="timeframe">
          <img
            src="/images/calendar-icon.png"
            alt="I worked in this company between"
          />
          <p style={{ fontSize: "14px" }}>{timeframe}</p>
        </div>
        <p>{referral}</p>
        <div className="website-screens">
          {examples.map((example) => (
            <a className="ss-wrapper" href={example.url}>
              <img src={example.img} alt="visit site" />
            </a>
          ))}
        </div>
      </div>
      <span className="spacer" />
    </>
  );
}
