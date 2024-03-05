import Button from '../Button/Button';

const WordListItem = ({ id, german, transcription, english }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{german}</td>
            <td>{transcription}</td>
            <td>{english}</td>
            <td>
                <Button text='edit' />
                <Button text='delete' />
            </td>
        </tr>
    )
}

export default WordListItem;