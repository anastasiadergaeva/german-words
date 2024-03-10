import Header from './components/Header/Header.jsx';
import WordListPage from './components/WordListPage/WordListPage';
import TrainMode from './components/TrainMode/TrainMode.jsx';
import './main.scss';

function App() {
    return (
        <>
            <Header />
            <div className='main'>
                <WordListPage />
                <TrainMode />
            </div>
        </>
    );
}

export default App;
