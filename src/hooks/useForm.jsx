import { useReducer } from "react"

const formReducer = (state, action) => {
    let isFormValid = true;
    switch (action.type) {
        case "INPUT_CHANGE":
            for (const dataID in state.inputs) {
                if (dataID === action.inputID) {
                    isFormValid = isFormValid && action.isValid;
                } else {
                    isFormValid = isFormValid && state.inputs[dataID].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputID]: {
                        value: action.value,
                        isValid: action.isValid
                    }
                },
                isFormValid: isFormValid
            }
        default: {
            return state
        }

    }

}


export const useForm = (initInputs, initFormIsValid) => {

    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initInputs,
        isFormValid: initFormIsValid
    });

    const onInputHandler = (value, isValid, id) => {
        dispatch({
            type: "INPUT_CHANGE",
            inputID: id,
            value,
            isValid
        });
    }

    return [formState, onInputHandler];
}