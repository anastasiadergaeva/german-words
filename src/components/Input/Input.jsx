import styles from './Input.module.scss';

export default function Input(props) {
    return (
        <div className={styles.input}>
            <input type="text" className={styles.input__field} {...props} />
        </div>
    );
}