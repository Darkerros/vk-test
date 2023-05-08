import styles from './date-picker.module.scss';
import {FC, MouseEventHandler, useCallback, useState} from "react";
import {DatePickerMenu} from "../date-picker-menu/date-picker-menu";
import {IDateItem} from "../../types/date-item-interface";


interface DataPickerProps {
    dates: IDateItem[];

    value: string;

    onChange: (date: string) => void;
}

export const DatePicker: FC<DataPickerProps> = ({dates, value, onChange}) => {
    const [isDateMenuActive, setIsDateMenuActive] = useState<boolean>(false)

    const handleClick: MouseEventHandler = useCallback(() => {
        setIsDateMenuActive(prev => !prev)
    }, [])
    const handleFocus = useCallback(() => {
        setIsDateMenuActive(true)
    },[])
    const handleBlur = useCallback(() => {
        setIsDateMenuActive(false)
    },[])
    const handleSelect = useCallback((date: IDateItem) => {
        onChange(date.date)
    }, [onChange])

    return (
        <div className={styles.datePicker}>
            <input value={value} name={"date"} className={styles.datePicker__dateInput} onMouseDown={handleClick} onFocus={handleFocus} onBlur={handleBlur} placeholder={'Выберите дату'} type="text" readOnly={true}/>
            <DatePickerMenu isActive={isDateMenuActive} dates={dates} onSelect={handleSelect} selectDate={value}/>
        </div>
    );
};
