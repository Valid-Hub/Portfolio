import "@/styles/SpecialityCardStyles.css";
import DecorationLine from "./DecorationLine";
import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";
import { mdiCog } from "@mdi/js";
import { mdiHomeVariant } from "@mdi/js";

export default function SpecialityCard({ props }) {
  const iconPath =
    props.iconName == "github"
      ? mdiGithub
      : props.iconName == "settings"
      ? mdiCog
      : mdiHomeVariant;

  return (
    <div className="card">
      <div className="iconHeader">
        <div className="iconHolder">
          <Icon path={iconPath} className="icon" />
        </div>
      </div>
      <DecorationLine />
      <div className="title">{props.title}</div>
      <div className="content">{props.content}</div>
    </div>
  );
}
