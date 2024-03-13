import { useState } from "react";
import './Slider.module.scss';
import Card from '../Card/Card';
import rightArrow from '../../images/right-arrow.png';
import leftArrow from '../../images/left-arrow.png';

export default function Slider({ words }) {
    const [index, setIndex] = useState(0);
    const arrayy = words[0].concat(words[1]);

    const handleNext = () => {
        if (index < arrayy.length - 1) {
            setIndex(index + 1);
        }
    }

    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    }

    return (
        <div className="slider">
            <div onClick={handlePrev} className="slider__arrow slider__arrow-right">
                <img src={leftArrow} alt="previous" className="arrow" />
            </div>
            <Card
                key={arrayy.id}
                german={arrayy[index].german}
                transcription={arrayy[index].transcription}
                english={arrayy[index].english} />
            <div onClick={handleNext} className="slider__arrow slider__arrow-right">
                <img src={rightArrow} alt="next" className="arrow" />
            </div>
        </div>
    );
}