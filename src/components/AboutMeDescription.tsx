import '@/styles/AboutMeDescriptionStyles.css';

export default function AboutMeDescription({ props }) {
    return (
        <div className="about-holder">
            <div className="wrapper">
                <div className="picture">
                    <img src={props.imageUrl} className="img" />
                </div>
                <div className="description">
                    <div className="title">
                        <b>{props.title}</b>
                    </div>
                    <div className="content-part-1">{props.partOne}</div>
                    <div className="content-part-2">{props.partTwo}</div>
                </div>
            </div>
        </div>
    );
}
