import styles from './WordListPage.module.scss';
import Table from '../../components/Table/Table';
import AddWord from '../../components/AddWord/AddWord';

export default function WordListPage() {
    return (
        <div className={styles.main}>
            <h1 className={styles.main__name}>word list</h1>
            <div className={styles.main__description}>This is a page with a list of words to learn. You can supplement the list of words by adding your own word.</div>
            <AddWord />
            <Table />
        </div>
    )
}