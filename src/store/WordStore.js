import { makeAutoObservable } from "mobx";

class WordStore {
    words = []

    constructor() {
        makeAutoObservable(this);
    }

    loadData = async () => {
        try {
            const response = await fetch("/api/words/");
            if (!response.ok) {
                throw new Error("Failed to fetch words");
            }
            const data = await response.json();
            this.words = data;
        } catch (error) {
            console.error("Error fetching words:", error);
        }
    };

    deleteWord = async (id) => {
        try {
            const response = await fetch(`/api/words/${id}/delete`, {
                method: "POST",
            });
            if (!response.ok) {
                throw new Error("Failed to delete word");
            }
            this.words = this.words.filter((word) => word.id !== id);
        } catch (error) {
            console.error("Error deleting word:", error);
        }
    };

    addWord = async (value) => {
        try {
            const response = await fetch(`/api/words/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify({
                    english: value.english,
                    transcription: value.transcription,
                    russian: value.russian,
                }),
            });
            if (!response.ok) {
                throw new Error("Failed to fetch add words");
            }
            this.loadData();
        } catch (error) {
            console.error("Error fetching words:", error);
        }
    };

    updateData = async (updatedWord) => {
        const body = {
            id: updatedWord.id,
            english: updatedWord.english,
            transcription: updatedWord.transcription,
            russian: updatedWord.russian,
            tags: "",
            tags_json: "[\"\"]",
        };

        try {
            const response = await fetch(`/api/words/${updatedWord.id}/update`, {
                method: "POST",
                body: JSON.stringify(body),
            });
            if (!response.ok) {
                throw new Error("Failed to update word");
            }
            const index = this.words.findIndex((word) => word.id === updatedWord.id);

            if (index !== -1) {
                this.words[index] = updatedWord;
            }
        } catch (error) {
            console.error("Error updating word:", error);
        }
    };
}

export default WordStore;