import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from './AddWord.module.scss';
import { inject, observer } from "mobx-react";

function AddWord({ addWord }) {
    const [value, setValue] = useState({
        english: '',
        transcription: '',
        russian: ''
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setValue((word) => {
            return { ...word, [name]: value };
        });
    }

    const handleAdd = (e) => {
        e.preventDefault();
        handleAdd(value);
        setValue({ english: '', transcription: '', russian: '' })
    }

    return (
        <div className={styles.form}>
            <Input placeholder='english' onChange={handleChange} />
            <Input placeholder='transcription' onChange={handleChange} />
            <Input placeholder='russian' onChange={handleChange} />
            <Button text='add new word' onClick={() => handleAdd} />
        </div>
    );
}

export default inject(({ wordStore }) => {
    const { addWord } = wordStore;
    return { addWord }
})(observer(AddWord));