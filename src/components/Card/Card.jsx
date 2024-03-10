import React, { useState } from 'react';
import Button from '../Button/Button';
import './Card.scss';

export default function Card({ german, transcription, english }) {
    const [isTranslated, setIsTranslated] = useState(false);
    function handleTranslate(event) {
        switch (event.target.innerText) {
            case 'translate':
                return setIsTranslated(true);
            default:
                console.log('ne srabotalo');
        }
    }

    return (
        <div className="card" onClick={handleTranslate}>
            <p className='card__word'>{german}</p>
            <p className='card__transcription'>{transcription}</p>
            {
                isTranslated ? (
                    <p className='card__translation'>{english}</p>
                ) : (
                    <Button text='translate' />
                )
            }
        </div>
    )
}