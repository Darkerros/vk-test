import {FC, memo} from "react";
import styles from './time-picker-menu.module.scss'
import {ITimeItem} from "../../types/time-item-interface";
import {TimePickerMenuItem} from "../time-picker-menu-item/time-picker-menu-item";
import clsx from "clsx";

interface TimePickerMenuProps {
    timeList: ITimeItem[];

    isMenuActive: boolean;

    onSelect: (time: ITimeItem) => void;

    selectTime: string;
}

export const TimePickerMenu:FC<TimePickerMenuProps> = memo(({timeList, isMenuActive, onSelect, selectTime}) => {

    const style = clsx({
        [styles.timePickerMenu]: true,
        [styles.timePickerMenu__active]: isMenuActive
    })

    return (
        <div className={style}>
            {timeList.map(time => <TimePickerMenuItem time={time} onSelect={onSelect} isActive={selectTime === time.time}/>)}
        </div>
    );
});
