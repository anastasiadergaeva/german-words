import Header from './components/Header/Header.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
import Footer from './components/Footer/Footer.jsx';
import './main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WordListPage from './pages/WordListPage/WordListPage.jsx';
import TrainMode from './components/TrainMode/TrainMode.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import WordStore from './store/WordStore.js';
import { Provider } from 'mobx-react';

const store = {
    wordStore: new WordStore(),
};

export default function App() {
    return (
        <Provider {...store}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/wordlist" element={<WordListPage />} />
                    <Route path="/train" element={<TrainMode />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <Footer />
            </Router>
        </Provider>
    );
}