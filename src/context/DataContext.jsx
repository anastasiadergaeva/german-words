import React, { createContext, useState, useEffect } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [words, setWords] = useState([]);

    const addWord = (newWord) => {
        setWords([...words, newWord]);
    }

    useEffect(() => {
        loadWords();
    }, []);

    const loadWords = () => {
        fetch("https://itgirlschool.justmakeit.ru/api/words")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then(words => {
                setWords(words);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    return (
        <DataContext.Provider value={{ words, addWord, setWords }}>
            {children}
        </DataContext.Provider>
    )
}

export { DataContext, DataProvider };