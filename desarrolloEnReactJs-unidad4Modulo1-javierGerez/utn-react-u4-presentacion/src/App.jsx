import Tarjeta from "./components/Tarjeta"
import "./App.css"

function App(){

  return (

    <div>

      <h1 className="titulo-principal">Mis tarjetas de presentación</h1>

      <div className="lista-tarjetas">

        <Tarjeta
        imagenUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
        nombre="Juan Carlos Perez"
        profesion="Lic. Sistemas"
        descripcion="Especialista en arquitectura de sistemas y desarrollo de software escalable con mas de diez años de trayectoria"
        />

        <Tarjeta
        imagenUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
        nombre="Lucas Garcia"
        profesion="Lic. Seguridad e higiene"
        descripcion="Experto en prevencio de riesgos laborales y normativa de Seguridad industrial en entornos de alta complejidad"
        />

        <Tarjeta
        imagenUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
        nombre="Miguel Roldan"
        profesion="Ing. Mecanico"
        descripcion="Ingeniero dedicado al diseño de maquinaria pesada y optimizacion de procesos termicos y estructurales."
        />


      </div>


    </div>

  )

}

export default App;