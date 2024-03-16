import styles from './NotFoundPage.module.scss'
import BackHandIcon from '@mui/icons-material/BackHand';
import SleepingPig from '../../images/pig.png';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

export default function NotFoundPage() {
    return (
        <div className={styles.main}>
            <h1 className={styles.main__header}>oops!</h1>
            <div className={styles.main__hand}>
                <BackHandIcon />
            </div>
            <p className={styles.main__error}>page not found</p>
            <div className={styles.main__image}>
                <img src={SleepingPig} alt="sleeping pig" />
            </div>
            <div className={styles.main__redirect}>
                <div className={styles.link}>
                    <Link to='/'>
                        <Button text='go to main page' />
                    </Link>
                </div>
            </div>
        </div>
    )
}