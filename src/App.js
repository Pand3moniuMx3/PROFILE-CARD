import React, { useState } from "react";
import "./App.css";
import "./styles/Profile.css";
import "./styles/Skills.css";
import "./styles/Projects.css";
import "./styles/Experience.css";
import "./styles/Tabs.css";

const generateRandomId = () => Math.floor(100000 + Math.random() * 900000);

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

const webDev = {
  text: {
    role: "Solopreneur Web Developer",
    description:
      "Web Developer and UI Designer on a mission to say no to boring websites and fill the digital landscape with beauty that converts.",
  },
  projects: [
    {
      id: generateRandomId(),
      title: "Vaporify",
      description:
        "Modern vape shop inspired on Canyon's website. Made with HTML, CSS and vanilla JavaScript.",
      tech: "HTML",
      url: "https://vaporify.onrender.com/",
    },
    {
      id: generateRandomId(),
      title: "Polbi",
      description:
        "Polish training company offering a variety of courses and trainings for accountants, IT specialists, etc.",
      tech: "React",
      url: "https://www.polbi.pl/",
    },
    {
      id: generateRandomId(),
      title: "My Movie List",
      description:
        "Single-page application for adding movies to your 'watched' checklist.",
      tech: "React",
      url: "https://react-app-my-movie-list.netlify.app/",
    },
    {
      id: generateRandomId(),
      title: "Oversee",
      description:
        "Small company offering facility management and internet marketing services for summer houses and resorts.",
      tech: "HTML",
      url: "https://pand3moniumx3.github.io/OverSEE/",
    },
    {
      id: generateRandomId(),
      title: "Czytaj Mądrze",
      description:
        "Family blog for spreading awareness about the best self-improvement authors and literature",
      tech: "WordPress",
      url: "https://czytajmadrze.pl/",
    },
    {
      id: generateRandomId(),
      title: "Smegma",
      description:
        "Modern e-commerce store for a company selling energy drinks and gym suppliments for lifters.",
      tech: "CSS",
      url: "https://pand3moniumx3.github.io/SMEGMA/",
    },
    {
      id: generateRandomId(),
      title: "Checklist App",
      description: "Minimalist checklist app built using React.js",
      tech: "React",
      url: "https://checklist-project.netlify.app/",
    },
    {
      id: generateRandomId(),
      title: "Offer for Inwest Mart",
      description:
        "Large-scale website offer for a railroad and real estate construction company.",
      tech: "React",
      url: "https://inwestmartoferta.netlify.app/",
    },
    {
      id: generateRandomId(),
      title: "Appreciation Course",
      description:
        "Landing page for an English course about appreciation at the workplace",
      tech: "WordPress",
      url: "https://skills.thebluetree.pl/appreciation/",
    },
    {
      id: generateRandomId(),
      title: "LearnJS Hub",
      description:
        "An educational hub with resources and lessons for people interested in learning JS frameworks.",
      tech: "React",
      url: "https://learnjshub.netlify.app/",
    },
    {
      id: generateRandomId(),
      title: "SRG Media",
      description:
        "Business site for a remote SEO agency in Warsaw. My first ever website.",
      tech: "React",
      url: "https://en.srgmedia.com.pl/",
    },
    {
      id: generateRandomId(),
      title: "Eat-Split-Repeat",
      description:
        "Modern React web application for easily splitting the bill while going out with friends.",
      tech: "React",
      url: "https://eat-split-repeat.netlify.app/",
    },
    {
      id: generateRandomId(),
      title: "Mateusz Mirecki Porftolio",
      description:
        "My full portfolio, containing all projects and extended information about my qualifications.",
      tech: "React",
      url: "https://mateuszmirecki.netlify.app/",
    },
  ],
  skills: [
    "WordPress",
    "Divi",
    "Elementor",
    "React",
    "React Three Fiber",
    "HTML & CSS",
    "Javascript",
  ],
  referrals: [
    {
      id: 1,
      company: "SRG Media",
      companyLogo: "/images/srgmedia-logo.png",
      position: "SEO Consultant & Owner",
      timeframe: "Dec 2022 - Oct 2023",
      referral:
        "First steps in my web development journey. I developed a strong interest for learning, coding and web design. Improved as a WordPress Developer.",
      examples: [
        {
          img: "/images/pages/srgmedia-ss.png",
          url: "https://en.srgmedia.com.pl/",
        },
        {
          img: "/images/pages/appreciation-ss.png",
          url: "https://skills.thebluetree.pl/appreciation/",
        },
      ],
    },
    {
      id: 2,
      company: "Polbi",
      companyLogo: "/images/polbi-logo.jpg",
      position: "SEO Consultant",
      timeframe: "Dec 2023 - Apr 2024",
      referral:
        "'Mateusz delivered high quality SEO services and helped with updating our website to comply with modern standards. No problem with meeting deadlines and complex requirements.'",
      examples: [
        {
          img: "/images/pages/polbi-ss.png",
          link: "https://www.polbi.pl/",
        },
      ],
    },
    {
      id: 3,
      company: "React",
      companyLogo: "/images/react-logo.png",
      position: "Freelance Developer",
      timeframe: "Apr 2024 - Present",
      referral:
        "Develop and design new or modernise existing web applications for clients, applying advanced skills in multiple web development tools and programming languages.",
      examples: [
        {
          img: "/images/pages/vaporify-ss.png",
          url: "https://vaporify.onrender.com/",
        },
        {
          img: "/images/pages/oversee-ss.png",
          url: "https://pand3moniumx3.github.io/OverSEE/",
        },
        {
          img: "images/pages/inwestmartoferta-ss.png",
          url: "https://inwestmartoferta.netlify.app/",
        },
      ],
    },
  ],
};

const animator = {
  text: {
    role: "Freelance Motion Graphic Designer",
    description:
      "Motion graphics and SFX designer. My goal is to infuse motion graphics with minimalistic beauty that satisfies the eye.",
  },
  projects: [
    {
      id: generateRandomId(),
      title: "Cyrima instruction videos",
      description:
        "A series of videos explaining how to use Cyrima - a software tool for carrying out large web projects securely",
      tech: ["/icons/ae-icon.png", "/icons/pr-icon.png"],
      url: "https://youtu.be/Jni_aPRjyD4",
    },
    {
      id: generateRandomId(),
      title: "Lyrical video (Yeat)",
      description: "Lyrical music video for the song 'Up Off X' by Yeat",
      tech: ["/icons/ae-icon.png", "/icons/blender-icon.png"],
      url: "https://www.instagram.com/p/Cz_l_Ervaml/",
    },
    {
      id: generateRandomId(),
      title: "Lyrical video (DDG)",
      description: "Lyrical music video for the song 'I'm Geekin' by DDG",
      tech: ["/icons/ae-icon.png"],
      url: "https://youtu.be/I9IRee4gVRI",
    },
    {
      id: generateRandomId(),
      title: "Lyrical video (Robotaki)",
      description: "Lyrical music video for the song 'Holding On' by Robotaki",
      tech: ["/icons/ae-icon.png", "/icons/inkscape-icon.png"],
      url: "https://youtu.be/c4WNjpzA6F8",
    },
    {
      id: generateRandomId(),
      title: "Lyrical video (Juice WRLD)",
      description:
        "Lyrical music video for the song 'Lucid Dreams' by Juice WRLD",
      tech: ["/icons/ae-icon.png", "/icons/inkscape-icon.png"],
      url: "https://youtu.be/YmpqK7IURSM",
    },
  ],
  skills: ["After Effects", "Premiere Pro", "Inkscape", "Blender", "Figma"],
  referrals: [
    {
      id: 1,
      company: "After Effects",
      companyLogo: "/images/after-effects-logo.png",
      position: "Music Video Animator",
      timeframe: "Dec 2022 - Nov 2024",
      referral:
        "The beginning of my animation journey. This is when I started experimenting with different technologies and perfected motion graphics with After Effects.",
      examples: [
        {
          img: "/images/animations/juice-wrld-lv.png",
          url: "https://youtu.be/YmpqK7IURSM",
        },
        {
          img: "/images/animations/robotaki-lv.png",
          url: "https://youtu.be/c4WNjpzA6F8",
        },
      ],
    },
    {
      id: 2,
      company: "Cyrima",
      companyLogo: "/images/cyrima-logo.png",
      position: "Contractor",
      timeframe: "Nov 2024 - Jan 2025",
      referral:
        "'Mateusz did an amazing job! He delivered great animations and had no issues with all of our requests. The job went smoothly with no delays. We greatly recommend him.'",
      examples: [
        {
          img: "/images/animations/cyrima-vid.png",
          link: "https://youtu.be/Jni_aPRjyD4",
        },
      ],
    },
  ],
};

export default function App() {
  const [activeTab, setActiveTab] = useState(1);

  let array;
  if (activeTab === 1) {
    array = webDev;
  } else if (activeTab === 2) {
    array = animator;
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
        <a
          className="btn"
          style={{ width: "100%", marginTop: "var(--inner-gap)" }}
          href="https://mateuszmirecki.netlify.app/contact"
        >
          Contact me
        </a>
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
