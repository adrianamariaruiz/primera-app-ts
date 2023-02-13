import { useReducer } from "react"
import { Sub } from "../types"

interface FormState {
    inputValues: Sub
}

type FormReducerAction = {
    type: "change_value",
    payload: {
        inputName: string,
        inputValue: string
    }
} | {
    type: "clear"
}

const InitialState = {
    name: {
        first: ''
    },
  email: '',
  picture: {
    medium: ''
  },
  login: {
    uuid: ''
  }
}

const formReducer = (state: FormState["inputValues"], action: FormReducerAction) => {
    switch ( action.type ) {
        case "change_value":
            const { inputName, inputValue } = action.payload
            return {
                ...state,
                [inputName]: inputValue
            }

        case "clear":
            return InitialState

        default:
            return state
    }
}

const useNewSubForm = () => {
    return useReducer(formReducer, InitialState)
}

export default useNewSubForm