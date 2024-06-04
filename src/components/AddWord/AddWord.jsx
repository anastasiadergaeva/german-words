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
        addWord(value);
        setValue({ english: '', transcription: '', russian: '' });
    }

    return (
        <div className={styles.form}>
            <Input name={'english'} placeholder='english' onChange={handleChange} value={value.english} />
            <Input name={'transcription'} placeholder='transcription' onChange={handleChange} value={value.transcription} />
            <Input name={'russian'} placeholder='russian' onChange={handleChange} value={value.russian} />
            <Button text='add new word' onClick={handleAdd} />
        </div>
    );
}

export default inject(({ wordStore }) => {
    const { addWord } = wordStore;
    return { addWord }
})(observer(AddWord));