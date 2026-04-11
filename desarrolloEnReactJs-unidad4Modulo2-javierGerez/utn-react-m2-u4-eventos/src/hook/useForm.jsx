import { useState } from "react"

function useForm(intialFormState){

    const [formState, setFormState] = useState(intialFormState)

    function handleSubmit(evento) {

        evento.preventDefault()

    }

    function handleChangeInput(evento) {

        const fieldName = evento.target.name
        const fieldValue = evento.target.value

        setFormState(
            (currentValue) => {
                return {
                    ...currentValue,
                    [fieldName]: fieldValue
                }
            }
        )

    }

    return {
        formState, handleSubmit, handleChangeInput
    }

}

export default useForm