import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface IBokingConferenceRoomFormReducer {
    inputs: {
        towerInput: {
            value: string;
            defaultValue: "A";
        },
        stageInput: {
            value: string;
            defaultValue: "";
        },
        roomInput: {
            value: string;
            defaultValue: string;
        },
        dateInput: {
            value: string;
            defaultValue: "";
        },
        timeInput: {
            value: string;
            defaultValue: "";
        }
        commentTextArea: {
            value: string;
            defaultValue: string;
        },
    }
}

export type IInputsKeys = keyof IBokingConferenceRoomFormReducer["inputs"]

const bokingConferenceRoomFormReducerState:IBokingConferenceRoomFormReducer = {
    inputs: {
        towerInput: {
            value: "A",
            defaultValue: "A",
        },
        stageInput: {
            value: "",
            defaultValue: "",
        },
        roomInput: {
            value: "",
            defaultValue: "",
        },
        dateInput: {
            value: "",
            defaultValue: "",
        },
        timeInput: {
            value: "",
            defaultValue: ""
        },
        commentTextArea: {
            value: "",
            defaultValue: ""
        },

    }
}


const bokingConferenceRoomFormSlice = createSlice({
    name: 'bokingConferenceRoomFormReducer',
    initialState: bokingConferenceRoomFormReducerState,
    reducers: {
        resetForm: (state) => {
            state.inputs.towerInput.value = state.inputs.towerInput.defaultValue
            state.inputs.stageInput.value = state.inputs.stageInput.defaultValue
            state.inputs.roomInput.value = state.inputs.roomInput.defaultValue
            state.inputs.dateInput.value = state.inputs.dateInput.defaultValue
            state.inputs.timeInput.value = state.inputs.timeInput.defaultValue
            state.inputs.commentTextArea.value = state.inputs.commentTextArea.defaultValue
        },

        changeTowerInputValue: (state, action:PayloadAction<string>) => {
            state.inputs.towerInput.value = action.payload
        },

        changeStageInputValue: (state, action:PayloadAction<string>) => {
            state.inputs.stageInput.value = action.payload
        },

        changeRoomInputValue: (state, action:PayloadAction<string>) => {
            state.inputs.roomInput.value = action.payload
        },

        changeDateInputValue: (state, action:PayloadAction<string>) => {
            state.inputs.dateInput.value = action.payload
        },

        changeTimeInputValue: (state, action:PayloadAction<string>) => {
            state.inputs.timeInput.value = action.payload
        },

        changeCommentTextAreaValue: (state, action:PayloadAction<string>) => {
            state.inputs.commentTextArea.value = action.payload
        },
    }
})


export const bookingConferenceRoomFormReducer = bokingConferenceRoomFormSlice.reducer
export const bookingConferenceRoomFormActions = bokingConferenceRoomFormSlice.actions