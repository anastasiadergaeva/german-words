import React, { createContext, useState, useEffect } from "react";
import data from '../data/words.json';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [words, setWords] = useState([]);
    const [topics, setTopics] = useState([]);

    const addWord = (newWord) => {
        setWords([words, newWord]);
    }

    const addTopic = (newTopic) => {
        setTopics([topics, newTopic]);
    }

    useEffect(() => {
        loadWords();
    }, []);

    const loadWords = () => {
        const words = data.flatMap(item => item.words);
        const topics = data.map(item => item.topic);
        setWords(words);
        setTopics(topics);
    }

    return (
        <DataContext.Provider value={{ words, addWord, setWords, topics, addTopic, setTopics }}>
            {children}
        </DataContext.Provider>
    )
}

export { DataContext, DataProvider };