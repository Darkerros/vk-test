import styles from './date-picker-item.module.scss'
import {FC, memo, MouseEventHandler, useCallback} from 'react';
import {IDateItem} from "../../types/date-item-interface";
import clsx from "clsx";


interface DatePickerItemProps {

    date: IDateItem;

    isSelect: boolean;

    onSelect: (dateData: IDateItem) => void;

    formater: Intl.DateTimeFormat;
}

export const DatePickerItem: FC<DatePickerItemProps> = memo(({date, onSelect, isSelect, formater}) => {
    const handleClick:MouseEventHandler = useCallback(() => {
        onSelect(date)
    },[onSelect,date])

    const style = clsx({
        [styles.datePickerItem]: true,
        [styles.datePickerItem__selected]: isSelect,
        [styles.datePickerItem__reserved]: date.isFullReserved,
    })

    return (

        <div
            className={style}
            onMouseDown={handleClick}>
            {formater.format(new Date(date.date)).toString()}
        </div>
    );
});
