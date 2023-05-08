import styles from './comment-field.module.scss';
import {bookingConferenceRoomFormActions} from "../../../../services/reducers/boking-conference-room-form-reducer";
import {ChangeEventHandler} from "react";
import {useAppDispatch} from "../../../../hooks/use-app-dispatch";
import {useAppSelector} from "../../../../hooks/use-app-selector";
import {FormField} from "../form-field/form-field";

export const CommentField = () => {
    const dispatch = useAppDispatch()
    const commentInput = useAppSelector(state => state.bookingConferenceRoomFormReducer.inputs.commentTextArea)
    const handleChange:ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        dispatch(bookingConferenceRoomFormActions.changeCommentTextAreaValue(event.currentTarget.value))
    }

    return (
        <FormField title={"Комментарий"}>
            <textarea className={styles.commentField__commentArea}
                      name="comment"
                      value={commentInput.value}
                      onChange={handleChange}
                      placeholder={"Введите комментарий или оставьте поле пустым"}
                      required
            ></textarea>
        </FormField>
    );
};
