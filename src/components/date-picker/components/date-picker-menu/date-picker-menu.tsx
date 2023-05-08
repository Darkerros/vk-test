import styles from './date-picker-menu.module.scss'
import {DatePickerItem} from "../date-picker-item/date-picker-item";
import {IDateItem} from "../../types/date-item-interface";
import {FC, useMemo} from "react";
import clsx from "clsx";

interface DatePickerMenuProps {
    dates: IDateItem[];

    selectDate: IDateItem["date"];

    onSelect: (dateData: IDateItem) => void;

    isActive: boolean;
}

export const DatePickerMenu: FC<DatePickerMenuProps> = ({dates, onSelect, selectDate, isActive}) => {

    const formater = useMemo(() => {
        return new Intl.DateTimeFormat('ru', {month: "short", day: "numeric"})
    }, [])

    const style = clsx({
        [styles.datePickerMenu]: true,
        [styles.datePickerMenu__active]: isActive
    })

    return (
        <div className={style}>
            {dates.map(date => <DatePickerItem key={date.date} formater={formater} isSelect={date.date === selectDate} date={date} onSelect={onSelect}/>)}
        </div>
    );
};
