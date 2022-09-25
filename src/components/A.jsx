import React from 'react'
import { contacto } from '../models/contacto.class'
import B from './B'

const A = () => {

const cont =  new contacto("Raul", "Nuñez", "Raul@gmail.com", true)
  return (
    <div>
        <B contacto={cont}></B>
    </div>
  )
}



export default A