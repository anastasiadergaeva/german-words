import { useState } from 'react';
import styles from './WordListPage.module.scss';
import Table from '../../components/Table/Table';
import Button from '../../components/Button/Button';
import { DataProvider } from '../../context/DataContext';

export default function WordListPage() {
    const [isAdded, setIsAdded] = useState(false);
    const handleAdd = (event) => {
        switch (event.target.innerText) {
            case 'add new word':
                return setIsAdded(true);
            default: console.log('n');
        }
    }
    return (
        <DataProvider>
            <div className={styles.main} onClick={handleAdd}>
                <h1 className={styles.main__name}>word list</h1>
                <p className={styles.main__text}>Select words to learn and go to training mode. You can also add your word to the collection!</p>
                <Button text='add new word' />
                <Table />
                <Button text='start train' />
                {isAdded ? console.log('added') : console.log('фигня')}
            </div>
        </DataProvider>
    )
}