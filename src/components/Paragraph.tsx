import '@/styles/ParagraphStyles.css';

export default function Paragraph(props: { category: string; titleFirstWord: string; titleSecondWord: string; content: string }) {
    return (
        <div className="paragraph-holder">
            <div className="category">{props.category}</div>
            <div className="title">
                <p>{props.titleFirstWord}</p>
                <p>{props.titleSecondWord}</p>
            </div>
            <div className="content">{props.content}</div>
        </div>
    );
}
