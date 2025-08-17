import styles from '../../styles/Components/Banners/word.banner.module.css';

interface WordBannerProps {
    words: string[];
    direction?: 'left' | 'right';
}

const WordBanner: React.FC<WordBannerProps> = ({ words, direction = 'right' }) => {
    return (
        <div className={styles.banner}>
            <div className={`${styles.scrollText} ${direction === 'left' ? styles.scrollLeft : styles.scrollRight}`}>
                <span>
                    {words.map((word, index) => (
                        <div className={styles.word} key={index}>
                            {word}
                        </div>
                    ))}
                </span>
                <span>
                    {words.map((word, index) => (
                        <div className={styles.word} key={index}>
                            {word}
                        </div>
                    ))}
                </span>
            </div>
        </div>
    );
};

export default WordBanner;
