import useNewSubForm from "../hooks/useNewSubForm"
import { Sub } from "../types"

interface FormProps {
    onNewSub: (newSub: Sub) => void
}

const Form = ({onNewSub}: FormProps) => {

    const [inputValues, dispatch] = useNewSubForm()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onNewSub(inputValues)
        handleClear()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target

        dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })
    }

    const handleClear = () => {
        dispatch({type: "clear"})
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={inputValues.name.first} type='text' placeholder='name' name='name'/>
            <input onChange={handleChange} value={inputValues.picture.medium} type='text' placeholder='picture' name='picture'/>
            <input onChange={handleChange} value={inputValues.email} type='email' placeholder='email' name='email'/>
            <button type="button" onClick={handleClear}>Limpiar formulario</button>
            <button type="submit">Guardar</button>
        </form>
    </>
  )
}

export default Form