import styles from './time-picker-menu-item.module.scss'
import {ITimeItem} from "../../types/time-item-interface";
import {FC, memo, useCallback} from "react";
import clsx from "clsx";

interface TimePickerMenuItemProps {
    time: ITimeItem;

    onSelect: (time: ITimeItem) => void;

    isActive: boolean;
}

export const TimePickerMenuItem:FC<TimePickerMenuItemProps> = memo(({time, onSelect, isActive}) => {

    const handleClick = useCallback(() => {
        onSelect(time)
    },[onSelect, time])

    const style = clsx({
        [styles.timePickerMenuItem]: true,
        [styles.timePickerMenuItem__reserved]: time.isReserved,
        [styles.timePickerMenuItem__active]: isActive,
    })

    return (
        <div className={style} onMouseDown={handleClick}>
            {time.time}
        </div>
    );
});
