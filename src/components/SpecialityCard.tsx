import DecorationLine from './DecorationLine';
import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';
import { mdiCog } from '@mdi/js';
import { mdiHomeVariant } from '@mdi/js';

export default function SpecialityCard({ props }) {
  const themes = {
    card: {
      width: 475,
      height: 307,
      backgroundColor: '#121213',
      color: '#ffffff'
    },
    iconHeader : {
      display: "flex",
      justifyContent: 'center',
      alignItems: "center",
      width: 475,
      height: 100,
    },
    iconHolder: {
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      width: 70,
      height: 70,
      background: "linear-gradient(to top right, #1B1B1D, #353538)",
      border: "1px solid black",
      color: "black",
      borderRadius: "50px"
    },
    icon: {
      width: 48,
      height: 48,
      color: "#ffffff",
    },
    title: {
      width: 475,
      height: 40,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: 'Anta',
      fontSize: "2rem",
    },
    content: {
      width: 475,
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      fontSize: "1.5rem",
      padding: "5px 40px 20px 40px",
      color: "#37373A"
    }
  }

  const iconPath = 
    props.iconName == "github"
      ? mdiGithub
      : props.iconName == "settings"
      ? mdiCog
      : mdiHomeVariant;

  return (
    <div style={themes.card} className="card">
      <div style={themes.iconHeader} className="icon">
        <div style={themes.iconHolder}>
         <Icon path={iconPath} style={themes.icon} />
        </div>
      </div>
        <DecorationLine />
      <div style={themes.title}>
        {props.title}
      </div>
      <div style={themes.content}>
        {props.content}
      </div>
    </div>
  );
}
