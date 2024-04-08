import TopicCard from "../../components/TopicCard/TopicCard";
import styles from "./TopicsPage.module.scss";
import words from '../../data/words.json';

export default function TopicsPage() {
    return (
        <main className={styles.main}>
            <h1>topics</h1>
            <p className={styles.description}>On this page you can select words to study by topic</p>
            <div className={styles.topics}>
                {words.map(wordtheme => {
                    return <TopicCard
                        key={wordtheme.id}
                        topic={wordtheme} />
                })}
            </div>
        </main>
    );
}