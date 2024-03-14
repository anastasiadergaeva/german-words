import styles from './WordListPage.module.scss';
import Table from '../Table/Table';

export default function WordListPage() {
    return (
        <div className={styles.main}>
            <h1 className={styles.main__name}>word list</h1>
            <Table />
        </div>
    )
}