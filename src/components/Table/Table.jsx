import words from '../../data/words.json';
import WordListItem from '../WordListItem/WordListItem';
import './Table.scss';

export default function Table() {
    return (
        <table className='table'>
            <thead className='table__head'>
                <tr className='heads'>
                    <th className='head'>topic</th>
                    <th className='head'>german</th>
                    <th className='head'>transcription</th>
                    <th className='head'>english</th>
                </tr>
            </thead>
            <tbody className='table__body'>
                {words.map(wordtheme => (wordtheme.words.map(word => (
                    <WordListItem
                        key={word.id}
                        topic={wordtheme.topic}
                        german={word.german}
                        transcription={word.transcription}
                        english={word.english}
                    />
                ))))}
            </tbody>
        </table>
    )
}