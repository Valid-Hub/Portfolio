import SpecialityCard from "@/components/SpecialityCard";
import LandingBox from "@/components/LandingBox";
import Paragraph from "@/components/Paragraph";
import QualityCubes from "@/components/QualityCubes";
import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";
import AboutMeDescription from "@/components/AboutMeDescription";
import CardSlider from "@/components/CardSlider";

export default function Home() {
  const themes = {
    flexbox: {
      marginTop: "100px",
      display: "flex",
      justifyContent: "space-around",
    },
  };

  return (
    <div style={themes.flexbox}>
      <div></div>
    </div>
  );
}

{
  /*
    const cardData = [
      {
        imageUrl: "alma.jpg",
        title: "Project 1",
        content: "Description for Project 1",
        hasGithub: true,
        githubUrl: "https://github.com/project1",
        hasWebsite: true,
        websiteUrl: "https://project1.com",
      },
      {
        imageUrl: "alma.jpg",
        title: "Project 2",
        content: "Description for Project 2",
        hasGithub: true,
        githubUrl: "https://github.com/project2",
        hasWebsite: false,
      },
      {
        imageUrl: "alma.jpg",
        title: "Project 3",
        content: "Description for Project 3",
        hasGithub: false,
        hasWebsite: true,
        websiteUrl: "https://project3.com",
      },
      {
        imageUrl: "alma.jpg",
        title: "Project 4",
        content: "Description for Project 4",
        hasGithub: true,
        githubUrl: "https://github.com/project4",
        hasWebsite: true,
        websiteUrl: "https://project4.com",
      },
    ];

    <CardSlider cards={cardData} />;
  */
}

{
  /*
   <Navbar />
  */
}

{
  /*
    <LandingBox />
  */
}

{
  /*
    <AboutMeDescription
      props={{
        imageUrl: "alma.jpg",
        title: "Passionate Developer & Tech Enthusiast",
        partOne:
          "I am Patrik, a high school student and an aspiring full-stack developer with a strong passion for software development. With experience in Vue.js, Express.js, C#, NestJS, and MySQL, I enjoy building scalable applications and optimizing workflows.",
        partTwo:
          "My expertise spans across backend and frontend development, DevOps, and cloud-based deployments. I have worked on projects ranging from admin dashboards to reservation systems, always aiming for efficiency and great user experience.",
      }}
    />
  */
}

{
  /*
    <ProjectCard
      props={{
        imageUrl: "alma.jpg",
        hasGithub: true,
        hasWebsite: true,
        githubUrl: "https://www.w3schools.com/css/css3_flexbox_container.asp",
        websiteUrl:
          "https://www.w3schools.com/css/css3_flexbox_container.asp",
        title: "Pollák Csengő",
        content:
          "My expertise spans across backend and frontend development, ns across backend and frontend deve DevOps, and cloud-based deployments. I have worked on projects ranging from admin dashboards to reservation systems, always aiming for efficiency and great user experience.",
      }}
    />
  */
}

{
  /*
    <QualityCubes props={{ content: "Creative" }} />
  */
}

{
  /*
    <Paragraph
      props={{
        category: "SPECIALITY",
        titleFirstWord: "My",
        titleSecondWord: "Specialities",
        content:
          "I specialize in developing efficient and scalable applications using modern technologies. My expertise spans across backend and frontend development.",
      }}
    />
  */
}

{
  /*
  <SpecialityCard props={{ iconName : "github", title: "Github manager", content: "Proficient in managing repositories, and collaborating with teams to maintain efficient codebases." }} />
  <SpecialityCard props={{ iconName : "settings", title: "Fullstack Developer", content: "Skilled in both frontend and backend development, creating seamless user experiences." }} />
  <SpecialityCard props={{ iconName : "home", title: "DevOps Enthusiast", content: "Beginner in automating workflows and deploying applications to ensure efficient operations." }} />
  */
}
