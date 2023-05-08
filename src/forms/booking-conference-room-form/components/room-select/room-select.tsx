import React, {ChangeEventHandler} from 'react';
import styles from "./room-select.module.scss";
import {roomNumbersToSelect} from "../../../../utils/consts/room-number-to-select";
import {useAppDispatch} from "../../../../hooks/use-app-dispatch";
import {useAppSelector} from "../../../../hooks/use-app-selector";
import {bookingConferenceRoomFormActions} from "../../../../services/reducers/boking-conference-room-form-reducer";

export const RoomSelect = () => {
    const dispatch = useAppDispatch()
    const roomInput = useAppSelector(state => state.bookingConferenceRoomFormReducer.inputs.roomInput)


    const handleChange:ChangeEventHandler<HTMLSelectElement> = (event) => {
        dispatch(bookingConferenceRoomFormActions.changeRoomInputValue(event.currentTarget.value))
    }

    return (
        <select className={styles.roomSelect} value={roomInput.value} onChange={handleChange} name={"room"} required>
            <option value="" style={{display: "none"}}>Комнаты</option>
            {roomNumbersToSelect.map(room => <option value={room.value}>{room.label}</option>)}
        </select>
    );
};
