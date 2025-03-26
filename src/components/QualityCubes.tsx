import "@/styles/QualityCubesStyles.css";

export default function Paragraph({ props }) {
  return (
    <div className="cube-wrapper">
      <div className="cube">
        <p className="content">{props.content}</p>
      </div>
    </div>
  );
}
