import React from 'react';
import Button from '../Button/Button';
import styles from './Card.module.scss';

export default function Card({ english, transcription, russian, isTranslated, setIsTranslated }) {

    const handleTranslate = (event) => {
        setIsTranslated(true);
    }

    return (
        <div className={styles.card}>
            <p className={styles.card__word}>{english}</p>
            <p className={styles.card__transcription}>{transcription}</p>
            {
                isTranslated ? (
                    <p className={styles.card__translation}>{russian}</p>
                ) : (
                    <Button text='translate' onClick={handleTranslate} />
                )
            }
        </div>
    )
}