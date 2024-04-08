import Header from './components/Header/Header.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
import Footer from './components/Footer/Footer.jsx';
import './main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WordListPage from './pages/WordListPage/WordListPage.jsx';
import TrainMode from './components/TrainMode/TrainMode.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import TopicsPage from './pages/TopicsPage/TopicsPage.jsx';

export default function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/wordlist" element={<WordListPage />} />
                    <Route path="/train" element={<TrainMode />} />
                    <Route path="/topics" element={<TopicsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}