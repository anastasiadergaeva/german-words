import React from 'react';
import Button from '../Button/Button';
import styles from './Card.module.scss';

export default function Card({ german, transcription, english, isTranslated, setIsTranslated }) {

    function handleTranslate(event) {
        switch (event.target.innerText) {
            case 'translate':
                setIsTranslated(true);
                break;
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