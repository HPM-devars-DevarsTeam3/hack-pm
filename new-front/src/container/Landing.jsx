import React from 'react'
import '../../src/App.css'
import {Link} from 'react-router-dom'
const Landing = () => {
    return (
        <div className='App'>
        <h1>Bienvenidos al prototipo de nuestro proyecto</h1>

        <p>Este app se penso con el fin de darle al estudiante un poco mas que una simple respuesta de si y no, quisimos ir un poco mas lejos la darle una retroalimentacion
                de como puede mejorar y seguir creciendo</p>

        <p>Este proyecto es mas enfocado a ser un complemento a los cursos y examenes de platzi para asi mejorar la plataforma de educacion y hacer un poco mas amena</p>

        <p>Lo mostrando aqui no es mas que un pequeño pensamiento, de como se puede llegar mas lejos con la educacion online.</p>
        <p>Acontinuacion les mostraremos como creemos que es posible mejorar los examenes de platzi</p>
        <Link to='/Respuesta'>
            Respuesta
        </Link>
      </div>
    )
}

export default Landing
