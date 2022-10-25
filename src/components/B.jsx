import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { contacto } from '../models/contacto.class'

const B = ({ contacto, deleted }) => {

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

        function conectedBadge() {
            if(conected === true){
                return(
                    <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                    {estado}
                    </span>
                  </h6>
                )
            }
            else{
                return(
                    <h6 className='mb-0'>
                    <span className='badge bg-warning'>
                    {estado}
                    </span>
                  </h6>
                )
            }
        }

  return (
    <div>
    {/*
        <h2>{contacto.name}</h2>
        <h2>{contacto.lastName}</h2>
        <h2>{contacto.email}</h2>
        <h2>{ estado }</h2>
        <button onClick={conec}>{ boton }</button>
    */}
    <tr className='fw-normal'>
        <th>
            <span>{contacto.name}</span>
        </th>
        <th className='align-middle'>
            <span>{contacto.lastName}</span>
        </th>
        <td className='align-middle'>
            <span>{contacto.email}</span>
        </td>
        <td className='align-middle'>
            {conectedBadge()}
        </td>
        <td>
        <button onClick={conec}>{ boton }</button>
        </td>
        <td>
        <button onClick={() => deleted(contacto)}>Eliminar contacto</button>
        </td>
    </tr>
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
