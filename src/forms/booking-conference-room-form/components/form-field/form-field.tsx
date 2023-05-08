import styles from './form-field.module.scss';
import {FC, ReactNode} from "react";

interface FormFieldProps {
    title?: string;

    children: ReactNode;
}

export const FormField:FC<FormFieldProps> = ({title, children}) => {
    return (
        <fieldset className={styles.formField}>
            {title && <p className={styles.formField__title}>{title}</p>}
            {children}
        </fieldset>
    );
};
