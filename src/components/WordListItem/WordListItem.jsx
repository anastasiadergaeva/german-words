import Button from '../Button/Button';
import './WordListItem.scss';

const WordListItem = ({ topic, german, transcription, english }) => {
    return (
        <tr>
            <td className='item'>{topic}</td>
            <td className='item'>{german}</td>
            <td className='item'>{transcription}</td>
            <td className='item'>{english}</td>
            <td className='buttons'>
                <Button text='edit' />
                <Button text='delete' />
            </td>
        </tr>
    )
}

export default WordListItem;