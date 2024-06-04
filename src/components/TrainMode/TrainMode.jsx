import { inject, observer } from 'mobx-react';
import styles from './TrainMode.module.scss';
import Slider from '../Slider/Slider';
import { useEffect } from 'react';

function TrainMode({ words }) {
    return (
        <>
            <div className={styles.main}>
                <Slider words={words} />
            </div>
        </>
    );
}

export default inject(({ wordStore }) => {
    const { words, loadData } = wordStore;

    useEffect(() => {
        loadData();
    }, []);

    return {
        words,
        loadData
    }
})(observer(TrainMode));