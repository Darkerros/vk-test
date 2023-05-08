import styles from './tower-select-field.module.scss'
import {ChangeEventHandler} from "react";
import {useAppSelector} from "../../../../hooks/use-app-selector";
import {useAppDispatch} from "../../../../hooks/use-app-dispatch";
import {bookingConferenceRoomFormActions} from "../../../../services/reducers/boking-conference-room-form-reducer";
import {FormField} from "../form-field/form-field";

export const TowerSelectField = () => {
    const dispatch = useAppDispatch()
    const value = useAppSelector(state => state.bookingConferenceRoomFormReducer.inputs.towerInput.value)

    const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        dispatch(bookingConferenceRoomFormActions.changeTowerInputValue(event.currentTarget.value))
    }

    return (
        <FormField title={"Выберите башню"}>
            <div className={styles.towerSelectField__selectItemContainer}>
                <label className={styles.towerSelectField__radioBtnContainer}>
                    <span>A</span>
                    <input type="radio" name={"towerName"} checked={value === "A"} value={"A"} onChange={onChange} required/>
                </label>
                <label className={styles.towerSelectField__radioBtnContainer}>
                    <span>B</span>
                    <input type="radio"  name={"towerName"} value={"B"} checked={value === "B"}  onChange={onChange} required/>
                </label>
            </div>
        </FormField>
    );
};
