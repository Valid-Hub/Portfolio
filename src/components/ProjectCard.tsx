import "@/styles/ProjectCardStyles.css";
import Icon from "@mdi/react";
import { mdiGithub, mdiGoogleChrome } from "@mdi/js";

export default function ProjectCard({ props }) {
  console.log(props.imageUrl);
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="image-header">
          <img src={props.imageUrl} className="img" />
        </div>
        <div className="content-area">
          <div className="title">{props.title}</div>
          <div className="content">{props.content}</div>
          <div className="accessibilities">
            {props.hasGithub && (
              <a href={props.githubUrl}>
                <Icon path={mdiGithub} className="icon" />
              </a>
            )}
            {props.hasWebsite && (
              <a href={props.websiteUrl}>
                <Icon path={mdiGoogleChrome} className="icon" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
