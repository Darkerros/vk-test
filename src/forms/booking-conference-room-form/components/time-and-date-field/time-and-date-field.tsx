import styles from './time-and-date-field.module.scss';
import {DatePicker} from "../../../../components/date-picker/components/date-picker/date-picker";
import {fakeDatetConst} from "../../../../utils/consts/fake-datet-const";
import {TimePicker} from "../../../../components/time-picker";
import {fakeTimeConst} from "../../../../utils/consts/fake-time-const";
import {useAppSelector} from "../../../../hooks/use-app-selector";
import {useAppDispatch} from "../../../../hooks/use-app-dispatch";
import {bookingConferenceRoomFormActions} from "../../../../services/reducers/boking-conference-room-form-reducer";
import {useCallback} from "react";
import {FormField} from "../form-field/form-field";

export const TimeAndDateField = () => {
    const dispatch = useAppDispatch()
    const dateInput = useAppSelector(state => state.bookingConferenceRoomFormReducer.inputs.dateInput)
    const timeInput = useAppSelector(state => state.bookingConferenceRoomFormReducer.inputs.timeInput)

    const handlerDateChange = useCallback((date: string) => {
        dispatch(bookingConferenceRoomFormActions.changeDateInputValue(date))
    },[])
    const handlerTimeChange = useCallback((time: string) => {
        dispatch(bookingConferenceRoomFormActions.changeTimeInputValue(time))
    },[])


    return (
        <FormField title={"Доступные даты и время"}>
            <div className={styles.timeAndDateField__inputsContainer}>
                <DatePicker dates={fakeDatetConst} value={dateInput.value} onChange={handlerDateChange}/>
                <TimePicker timeList={fakeTimeConst} value={timeInput.value} onChange={handlerTimeChange} />
            </div>
        </FormField>
    );
};
