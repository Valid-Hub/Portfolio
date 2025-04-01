import '@/styles/AboutMeDescriptionStyles.css';

export default function AboutMeDescription({ props }) {
    return (
        <div className="about-holder">
            <div className="wrapper">
                <div className="picture">
                    <div className="profile-container">
                        <div className="profile-image-wrapper">
                            <img src="xd.jpg" alt="Profile" className="profile-image" />
                        </div>
                    </div>
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
