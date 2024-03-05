import words from '../../data/words.json';
import WordListItem from '../WordListItem/WordListItem';
console.log(words[0].words)
export default function Table() {
    <table>
        <thead>
            <tr>
                <th>topic</th>
                <th>german</th>
                <th>transcription</th>
                <th>english</th>
            </tr>
        </thead>
        <tbody>
            {words.map(wordtheme => (wordtheme.words.map(word => (
                <WordListItem key={word.id} {...word} />
            ))))}
        </tbody>
    </table>
}