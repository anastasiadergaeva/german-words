import Card from '../Card/Card';
import words from '../../data/words.json';
import styles from './TrainMode.module.scss';

export default function TrainMode() {
    return (
        <div className={styles.cards}>
            {words.map(theme => (theme.words.map(word => {
                return <Card key={word.id} {...word} />
            })))}
        </div>
    )
}