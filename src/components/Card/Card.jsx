import Button from '../Button/Button';
import './Card.scss';

export default function Card({ german, transcription }) {
    return (
        <div className="card">
            <p className='card__word'>{german}</p>
            <p className='card__transcription'>{transcription}</p>
            <Button text='check' />
        </div>
    )
}