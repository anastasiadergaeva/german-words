import { DataProvider } from '../../context/DataContext';
import styles from './TrainMode.module.scss';
import Slider from '../Slider/Slider';


export default function TrainMode() {
    return (
        <DataProvider>
            <div className={styles.main}>
                <Slider />
            </div>
        </DataProvider>
    );
}