import { useEffect, useState } from 'react'
import UsuarioCard from '../UsuarioCard/UsuarioCard'
import './Usuarios.css'

function Usuarios(){

    const [loadingUser, setLoadingUser] = useState(false)
    const [users, setUsers] = useState(null)
    const [error, setError] = useState("")

    const traerUsuarios = async () => {

        setLoadingUser(true)

        try {
            
            const result = await fetch(
                "https://jsonplaceholder.typicode.com/users",
                {
                method: "GET"
                }
            )

            // validar la respuesta
            if(!result.ok){
                throw new Error("No se ha podido cargar usuarios")
            }

            const body = await result.json()

            setUsers(body)
            setLoadingUser(false)

        } catch (err) {
            setError(err.message)
            setLoadingUser(false)
        }

    }
  
    useEffect(() => {
        traerUsuarios()
    },[])


    return (
        <>
        {/* Renderizado condicional */}

        {/* Si loading es true, mostrar: "Cargando usuarios..." */}
        { loadingUser && <span className="mensaje-estado">Cargando usuarios...</span> }

        {/* Si error tiene valor, mostrar el mensaje de error */}
        { error && <h2 className="mensaje-error">Error: {error}</h2>}

        {/* Si hay datos en usuarios, renderizar una lista ul con sus nombres y correos */}
        <ul className="usuarios-lista">
            {users && !loadingUser && users.map((personas) => (
                <li key={personas.id} className="usuarios-item">
                    <h2 className="persona-titulo">Persona #{personas.id}</h2>
                    <UsuarioCard usuario={personas} />
                </li>
            ))}
        </ul>

        </>
    )

}

export default Usuarios