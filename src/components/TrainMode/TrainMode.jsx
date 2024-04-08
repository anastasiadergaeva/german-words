import words from '../../data/words.json';
import styles from './TrainMode.module.scss';
import Slider from '../Slider/Slider';

export default function TrainMode() {
    const example = words.map(topic => (topic.words))
    return (
        <>
            <div className={styles.main}>
                <Slider words={example} />
            </div>
        </>
    );
}