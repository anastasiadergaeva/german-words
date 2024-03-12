import { useState } from "react";
import Card from '../Card/Card';

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
        <div>
            <button onClick={handlePrev}>Предыдущее слово</button>
            <Card
                key={arrayy.id}
                german={arrayy[index].german}
                transcription={arrayy[index].transcription}
                english={arrayy[index].english} />
            <button onClick={handleNext}>Следующее слово</button>
        </div>
    );
}