import React, { useEffect, useReducer } from 'react'
import Validator from '../../validators/Validator';

export default function Input(props) {



    const inputReducer = (state, action) => {
        switch (action.type) {
            case "CHANG":
                const { validationResulte, errorMessage } = Validator(action.value, action.validationes);
                return {
                    ...state,
                    value: action.value,
                    errorMessage: errorMessage,
                    isValid: validationResulte
                }

            default:
                return state;
        }
    }
    const [maininput, dispatch] = useReducer(inputReducer, {
        value: "",
        isValid: false,
        errorMessage: null,
    })

    const { value, isValid, errorMessage } = maininput;
    const { onInputHandler, id } = props;
    useEffect(() => {
        onInputHandler(value, isValid, id)
    }, [value]);

    const onChangeHandler = (event) => {
        dispatch(
            {
                type: "CHANG",
                value: event.target.value.trim(),
                isValid: event.target.value.trim().length > 0 ? false : true,
                validationes: props.validationes
            }
        )
    }

    

    const element = props.element === "input" ? (
        <input
            type={props.type}
            placeholder={props.placeholder}
            className={`${props.className} ${maininput.isValid ? "border-green-500 focus:outline-green-500" : "border-red-500 focus:outline-red-500"}`}
            onChange={onChangeHandler}
            value={maininput.value}
        />
    ) : (
        <textarea
            placeholder={props.placeholder}
            className={`${props.className} ${maininput.isValid ? "border-green-500 focus:outline-green-500" : "border-red-500 focus:outline-red-500"}`}
            onChange={onChangeHandler}
            value={maininput.value}
        />
    );

    return (
        <div>
            {element}
            {errorMessage && <p className="text-red-500 text-sm mt-2 ml-4">* {errorMessage}</p>}
        </div>
    )
}
