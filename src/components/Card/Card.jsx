import React, { useState } from 'react';
import Button from '../Button/Button';
import styles from './Card.module.scss';

export default function Card({ german, transcription, english }) {
    console.log(german, transcription, english);
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
        <div className={styles.card} onClick={handleTranslate}>
            <p className={styles.card__word}>{german}</p>
            <p className={styles.card__transcription}>{transcription}</p>
            {
                isTranslated ? (
                    <p className={styles.card__translation}>{english}</p>
                ) : (
                    <Button text='translate' />
                )
            }
        </div>
    )
}