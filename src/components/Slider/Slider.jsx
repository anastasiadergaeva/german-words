import { useState, useContext } from "react";
import { DataContext } from '../../context/DataContext';
import styles from './Slider.module.scss';
import Card from '../Card/Card';
import EastRounded from '@mui/icons-material/EastRounded';
import KeyboardBackspaceRounded from '@mui/icons-material/KeyboardBackspaceRounded';

export default function Slider() {
    const [index, setIndex] = useState(0);
    const [isCardTranslated, setIsCardTranslated] = useState(false);
    const { words } = useContext(DataContext);

    const handleNext = () => {
        setIndex((index) => index + 1);
        setIsCardTranslated(false);
    }

    const handlePrev = () => {
        setIndex((index) => index - 1);
        setIsCardTranslated(false);
    }

    return (
        <div className={styles.slider}>
            <div onClick={handlePrev} className={styles.slider__arrow}>
                <KeyboardBackspaceRounded />
            </div>
            <div className="slider__card">

            </div>

            {words.map((word, i) => {
                return (
                    <div key={word.id} style={{ display: i === index ? "block" : "none" }}>
                        <Card
                            key={word.id}
                            english={word.english}
                            transcription={word.transcription}
                            russian={word.russian}
                            isTranslated={isCardTranslated}
                            setIsTranslated={setIsCardTranslated}
                        />
                    </div>)
            })}
            <div onClick={handleNext} className={styles.slider__arrow}>
                <EastRounded />
            </div>
        </div>
    );
}