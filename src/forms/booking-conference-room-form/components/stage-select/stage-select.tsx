import styles from './stage-select.module.scss';
import {towersStageToSelect} from "../../../../utils/consts/tower-stage-to-select-const";
import {useAppDispatch} from "../../../../hooks/use-app-dispatch";
import {useAppSelector} from "../../../../hooks/use-app-selector";
import {ChangeEventHandler} from "react";
import {bookingConferenceRoomFormActions} from "../../../../services/reducers/boking-conference-room-form-reducer";

export const StageSelect = () => {
    const dispatch = useAppDispatch()
    const {value, defaultValue} = useAppSelector(state => state.bookingConferenceRoomFormReducer.inputs.stageInput)

    const onChange:ChangeEventHandler<HTMLSelectElement> = (event) => {
        dispatch(bookingConferenceRoomFormActions.changeStageInputValue(event.currentTarget.value))
    }

    return (
        <select name="towerStageSelect" className={styles.stageSelect} placeholder={'этаж'} defaultValue={defaultValue} value={value} onChange={onChange} required>
            <option style={{display: "none"}} value={''}>Этаж</option>
            {towersStageToSelect.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
    );
};
