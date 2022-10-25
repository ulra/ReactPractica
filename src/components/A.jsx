import React, {useState} from 'react'
import { contacto } from '../models/contacto.class'
import B from './B'
import Form from './form'

const A = () => {

const cont =  new contacto("Raul", "Nuñez", "Raul@gmail.com", true)
const cont2 =  new contacto("Raul", "Nuñez", "Raul@gmail.com", true)
const cont3 =  new contacto("Raul", "Nuñez", "Raul@gmail.com", true)

const [conta, setContac] = useState([cont, cont2, cont3]);

function deletedContacto(contacto) {
    const index = conta.indexOf(contacto)
    const tempContac = [...conta]
    tempContac.splice(index, 1)
    setContac(tempContac)
}

function agregarContacto(contacto){
  const index = conta.indexOf(contacto)
  const tempContac = [...conta]
  tempContac.push(contacto)
  setContac(tempContac)
}

  return (
    <div>
    <div className='col-12'>
      <div className='card'>
        <div className='card-header p-3'>
          <h5>Contactos</h5>
        </div>
        <div className='card-body' style={{position: "relative", height:"400px"}} data-adb-perfect-scrollbar="true">
        <Form add={agregarContacto}></Form>
          <table>
            <thead>
              <tr>
                <th scope='col'>Contactos</th>
              </tr>
            </thead>
            <tbody>
              {conta.map((contacto, index) =>{
                return(
                  <B key={index} contacto={contacto} deleted={deletedContacto}></B>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    </div>
  )
}



export default A