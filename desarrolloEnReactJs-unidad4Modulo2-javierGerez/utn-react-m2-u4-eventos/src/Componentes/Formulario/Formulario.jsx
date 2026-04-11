import { useState } from "react"
import useForm from "../../hook/useForm"
import './Formulario.css'

const Formulario = () => {

    const intialFormState = {
        nombre: '',
        email: ''
    }

    const {formState, handleSubmit, handleChangeInput} = useForm(intialFormState)

    // logica para eventos de foco Focus y Blur

    const [mensajeFoco, setMensajeFoco] = useState("")

    const handleFocus = (e) => {
        // name identifica el input y type identifica el evento
        const { name, type } = e.target
        
        if (e.type === 'focus') {
            const msg = `Evento Focus en el campo ${name}`
            setMensajeFoco(msg)
        } else if (e.type === 'blur') {
            const msg = `Evento Blur en el campo ${name}`
            setMensajeFoco(msg)
        }
    }

    // logica para evento del Mouse
    const [btnColor, setBtnColor] = useState("#f1f2f6");

    const handleEventMouse = (e) => {
        if (e.type === 'mouseenter') {
            setBtnColor("#3498db")
        } else if (e.type === 'mouseleave') {
            setBtnColor("#f1f2f6")
        }
    }

    
    // logica para el evento key down
    const [enterInput, setEnterInput] = useState('')

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            const msg = `Enter en el input ${e.target.name}`
            setEnterInput(msg)
        }
    }

    return (

        <div>
            <form onSubmit={handleSubmit}>

                <div>
                    <input 
                        type="text"
                        name="nombre"
                        placeholder="Tu nombre"
                        onChange={handleChangeInput}
                        value={formState.nombre}
                        onFocus={handleFocus}
                        onBlur={handleFocus}
                        onKeyDown={handleKeyDown}
                    />
                </div>
            

                <div>
                    <input 
                        type="email" 
                        name="email"
                        placeholder="ejemplo@correo.com"
                        onChange={handleChangeInput}
                        value={formState.email} // el formulario debe ajustarse al contenido del estado
                        onFocus={handleFocus}
                        onBlur={handleFocus}
                    />
                </div>

                <button type="submit"
                        onMouseEnter={handleEventMouse}
                        onMouseLeave={handleEventMouse}
                        style={{ backgroundColor: btnColor }}>
                            Enviar
                </button>

            </form>

            {/* // validacion visual */}

            <div className="box-validacion-visual">
                {<h2>Validacion visual</h2>}
                {formState.nombre && <p className="mensaje-input">Se esta editando 'Nombre' con {formState.nombre}</p>}
                {formState.email && <p className="mensaje-input">Se esta editando 'Email' con {formState.email}</p>}
                {mensajeFoco && <p className="mensaje-ayuda">{mensajeFoco}</p>}
                {enterInput && <p>{enterInput}</p>}
            </div>
            

        </div>
        
        
    )

}

export default Formulario