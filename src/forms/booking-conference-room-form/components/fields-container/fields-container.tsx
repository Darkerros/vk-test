import styles from "./fields-container.module.scss";
import {TowerSelectField} from "../tower-select-field/tower-select-field";
import {TimeAndDateField} from "../time-and-date-field/time-and-date-field";
import {memo} from "react";
import {RoomAndStageSelectFieldModule} from "../room-and-stage-select-field/room-and-stage-select-field.module";
import {CommentField} from "../comment-field/comment-field";

export const FieldsContainer = memo(() => {
    return (
        <div className={styles.fieldsContainer}>
            <TowerSelectField/>
            <RoomAndStageSelectFieldModule/>
            <TimeAndDateField/>
            <CommentField/>
        </div>
    );
});
