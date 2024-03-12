import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
// import WordListPage from './components/WordListPage/WordListPage';
// import TrainMode from './components/TrainMode/TrainMode.jsx';
import Slider from './components/Slider/Slider.jsx';
import './main.scss';
import data from '../src//data/words.json';

function App() {
    const example = data.map(topic => (topic.words))
    console.log(example);
    return (
        <>
            <Header />
            <div className='main'>
                <Slider words={example} />
            </div>
            <Footer />
        </>
    );
}

export default App;
