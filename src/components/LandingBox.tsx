import "@/styles/LandingBoxStyles.css";

export default function LandingBox() {
  return (
    <div className="box">
      <div className="left">
        <div className="title">Jani Patrik</div>
        <div className="content">
          A passionate and dedicated software developer with experience in
          full-stack development, DevOps, and GitHub project management. I enjoy
          building scalable applications, optimizing workflows, and contributing
          to open-source projects.
        </div>
        <div className="button-holder">
          <button className="button">View Projects</button>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}
