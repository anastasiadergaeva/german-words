import React, { createContext, useState, useEffect } from "react";

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
        fetch("../data/words")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then(words => {
                words.flatMap(item => setWords(item.words));
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
        // const topics = words.map(item => item.topic);
        // setTopics(topics);
    }

    return (
        <DataContext.Provider value={{ words, addWord, setWords, topics, addTopic, setTopics }}>
            {children}
        </DataContext.Provider>
    )
}

export { DataContext, DataProvider };