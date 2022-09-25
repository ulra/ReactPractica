import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { contacto } from '../models/contacto.class'

const B = ({ contacto }) => {

    const [conected, setConected] = useState(true);
    const [boton, SetBoton] = useState("Desconectar");
    const [estado, SetEstado] = useState("Contacto En Línea")
    
        const conec = () => {
            if(conected === true){
                setConected(false)
                SetBoton("Conectar")
                SetEstado("Contacto No Disponible")
            }else{
                setConected(true)
                SetBoton("Desconectar")
                SetEstado("Contacto En Línea")
            }
        }

  return (
    <div>
        <h2>{contacto.name}</h2>
        <h2>{contacto.lastName}</h2>
        <h2>{contacto.email}</h2>
        <h2>{ estado }</h2>
        <button onClick={conec}>{ boton }</button>
    </div>
  )
}

B.propTypes = {
    contacto: PropTypes.instanceOf(contacto),
    name: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    conected: PropTypes.bool
}

export default B
