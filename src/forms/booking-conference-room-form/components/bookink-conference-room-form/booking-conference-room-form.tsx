import styles from './booking-conference-room-form.module.scss'
import {FieldsContainer} from "../fields-container/fields-container";
import {ButtonContainer} from "../button-container/button-container";
import {useAppSelector} from "../../../../hooks/use-app-selector";
import {FormEventHandler} from "react";
import {useAppDispatch} from "../../../../hooks/use-app-dispatch";
import {bookingConferenceRoomFormActions} from "../../../../services/reducers/boking-conference-room-form-reducer";

export const BookingConferenceRoomForm = () => {
    const dispatch = useAppDispatch()
    const inputs = useAppSelector(state => state.bookingConferenceRoomFormReducer.inputs)

    const handleSubmit:FormEventHandler = (event) => {
        event.preventDefault()

        const towerName = inputs.towerInput.value
        const stage = inputs.stageInput.value
        const room = inputs.roomInput.value
        const date = inputs.dateInput.value
        const time = inputs.timeInput.value
        const comment = inputs.commentTextArea.value

        const formData = {
            towerName,
            stage,
            room,
            date,
            time,
            comment
        }

        console.log(formData)
    }

    const handleReset:FormEventHandler = (event) => {
        event.preventDefault()
        dispatch(bookingConferenceRoomFormActions.resetForm())
    }

    return (
        <form className={styles.bookingConferenceRoomForm} onSubmit={handleSubmit} onReset={handleReset}>
            <p className={styles.bookingConferenceRoomForm__title}>Форма резервирования переговорной</p>
            <FieldsContainer/>
            <ButtonContainer/>
        </form>
    );
};
