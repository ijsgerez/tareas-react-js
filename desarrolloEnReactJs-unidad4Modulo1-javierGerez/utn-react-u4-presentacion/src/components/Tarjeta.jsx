import "./Tarjeta.css"

const Tarjeta = ({nombre, profesion, imagenUrl, descripcion}) => {

  return (

    <div className="tarjeta">

      <img src={imagenUrl} alt={`Imagen de perfil de ${nombre}`} className="tarjeta-img"/>
      
      <h2 className="tarjeta-nombre">{nombre}</h2>

      <h3 className="tarjeta-profesion">{profesion}</h3>

      <p className="tarjeta-descripcion">{descripcion}</p>

    </div>

  )

}

export default Tarjeta;