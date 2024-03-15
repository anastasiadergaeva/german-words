import { useState } from "react";
import styles from './Slider.module.scss';
import Card from '../Card/Card';
import rightArrow from '../../images/right-arrow.png';
import leftArrow from '../../images/left-arrow.png';

export default function Slider({ words }) {
    const [index, setIndex] = useState(0);
    const [isCardTranslated, setIsCardTranslated] = useState(false);

    const arrayy = words[0].concat(words[1]);

    const handleNext = () => {
        if (index < arrayy.length - 1) {
            setIndex(index + 1);
            setIsCardTranslated(false);
        }
    }

    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1);
            setIsCardTranslated(false);
        }
    }

    return (
        <div className={styles.slider}>
            <div onClick={handlePrev} className={styles.slider__arrow}>
                <img src={leftArrow} alt="previous" className={styles.arrow} />
            </div>
            <Card
                key={arrayy.id}
                german={arrayy[index].german}
                transcription={arrayy[index].transcription}
                english={arrayy[index].english}
                isTranslated={isCardTranslated}
                setIsTranslated={setIsCardTranslated}
            />
            <div onClick={handleNext} className={styles.slider__arrow}>
                <img src={rightArrow} alt="next" className={styles.arrow} />
            </div>
        </div>
    );
}