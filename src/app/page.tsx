import SpecialityCard from "@/components/SpecialityCard";
import LandingBox from "@/components/LandingBox";
import Paragraph from "@/components/Paragraph";
import QualityCubes from "@/components/QualityCubes";
import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";

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
      <Navbar />
    </div>
  );
}

{
  /*
    <LandingBox />
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
