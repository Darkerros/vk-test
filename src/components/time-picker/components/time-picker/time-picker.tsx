import styles from './time-picker.module.scss';
import {TimePickerMenu} from "../time-picker-menu/time-picker-menu";
import {ITimeItem} from "../../types/time-item-interface";
import {FC, MouseEventHandler, useCallback, useState} from "react";

interface TimePickerProps {
    timeList: ITimeItem[];

    onChange: (time: string) => void;
    value: string;
}

export const TimePicker:FC<TimePickerProps> = ({timeList, onChange, value}) => {
    const [isTimeMenuActive, setIsTimeMenuActive] = useState<boolean>(false)

    const handleClick: MouseEventHandler = useCallback(() => setIsTimeMenuActive(prev => !prev), [])
    const handleFocus = useCallback(() => setIsTimeMenuActive(true),[])
    const handleBlur = useCallback(() => setIsTimeMenuActive(false),[])
    const handleSelect = useCallback((time: ITimeItem) => onChange(time.time), [onChange])

    return (
        <div className={styles.timePicker}>
            <input value={value} className={styles.timePicker__timeInput} type="text" placeholder={'Выберите время'} readOnly={true} onMouseDown={handleClick} onFocus={handleFocus} onBlur={handleBlur}/>
            <TimePickerMenu timeList={timeList} isMenuActive={isTimeMenuActive} onSelect={handleSelect} selectTime={value}/>
        </div>
    );
};
