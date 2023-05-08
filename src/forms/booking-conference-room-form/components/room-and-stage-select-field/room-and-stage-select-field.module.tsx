import styles from './room-and-stage-select-field.module.scss'
import {FormField} from "../form-field/form-field";
import {RoomSelect} from "../room-select/room-select";
import {StageSelect} from "../stage-select/stage-select";

export const RoomAndStageSelectFieldModule = () => {

    return (
        <FormField title={"Доступные этажи и комнаты"}>
            <div className={styles.roomAndStageSelectField__selectContainer}>
                <RoomSelect/>
                <StageSelect/>
            </div>
        </FormField>
    )
};
