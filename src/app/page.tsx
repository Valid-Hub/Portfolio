import SpecialityCard from "@/components/SpecialityCard";

export default function Home() {
  const themes = {
    flexbox : {
      marginTop: "100px",
      display: "flex",
      justifyContent: "space-around",
    }
  }

  return (
    <div style={themes.flexbox}>
      <SpecialityCard props={{ iconName : "github", title: "Github manager", content: "Proficient in managing repositories, and collaborating with teams to maintain efficient codebases." }} />
      <SpecialityCard props={{ iconName : "settings", title: "Fullstack Developer", content: "Skilled in both frontend and backend development, creating seamless user experiences." }} />
      <SpecialityCard props={{ iconName : "home", title: "DevOps Enthusiast", content: "Beginner in automating workflows and deploying applications to ensure efficient operations." }} />
    </div>
  );
}
