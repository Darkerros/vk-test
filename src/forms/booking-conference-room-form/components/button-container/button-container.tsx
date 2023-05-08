import styles from './button-container.module.scss'
import {memo} from "react";

export const ButtonContainer = memo(() => {
    return (
        <div className={styles.buttonContainer}>
            <button className={`${styles.buttonContainer__btn} ${styles.buttonContainer__resetBtn}`} type={"reset"}>Очистить</button>
            <button className={`${styles.buttonContainer__btn} ${styles.buttonContainer__submitBtn}`} type={"submit"}>Отправить</button>
        </div>
    );
});
