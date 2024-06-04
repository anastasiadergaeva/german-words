import { useState } from "react";
import styles from './Slider.module.scss';
import Card from '../Card/Card';
import EastRounded from '@mui/icons-material/EastRounded';
import KeyboardBackspaceRounded from '@mui/icons-material/KeyboardBackspaceRounded';

export default function Slider({ words }) {
    const [index, setIndex] = useState(0);
    const [isCardTranslated, setIsCardTranslated] = useState(false);

    const handleNext = () => {
        if (index < words.length - 1) {
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
                <KeyboardBackspaceRounded />
            </div>
            <Card
                key={words.id}
                english={words[index].english}
                transcription={words[index].transcription}
                russian={words[index].russian}
                isTranslated={isCardTranslated}
                setIsTranslated={setIsCardTranslated}
            />
            <div onClick={handleNext} className={styles.slider__arrow}>
                <EastRounded />
            </div>
        </div>
    );
}