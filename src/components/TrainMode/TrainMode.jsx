// import Card from '../Card/Card';
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
    // return (
    //     <div className={styles.cards}>
    //         {words.map(theme => (theme.words.map(word => {
    //             return <Card key={word.id} {...word} />
    //         })))}
    //     </div>
    // )
}