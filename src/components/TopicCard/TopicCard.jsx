import styles from './TopicCard.module.scss';

export default function TopicCard({ topic }) {
    return (
        <div className={styles.card}>
            <p className={styles.card__topic}>{topic.topic}</p>
            <p className={styles.card__count}>word count: {topic.words.length}</p>
        </div>
    );
}