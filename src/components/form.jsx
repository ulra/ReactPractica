import React, {useRef} from 'react';
import {contacto} from "../models/contacto.class"
import PropTypes from 'prop-types'

const Form = ({add}) => {

    const nameRef = useRef("")
    const apellidoRef = useRef("")
    const emailRef = useRef("")

    function addContacto(e){
        e.preventDefault()
        const newContacto = new contacto(
            nameRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
            true
        )
            add(newContacto)
    }

    return (
        <form onSubmit={addContacto} className="d-flex justify-content-center align-items-center mb-4">
            <div className='form-outline flex-fill'>
            <input ref={nameRef} id="inputName" type="text" className='form-control form-control-lg' required autoFocus placeholder='Nombre'/>
            <input ref={apellidoRef} id="inputLastName" type="text" className='form-control form-control-lg' required autoFocus placeholder='Apellido'/>
            <input ref={emailRef} id="inputName" type="email" className='form-control form-control-lg' required autoFocus placeholder='email'/>
            <button type='submit' className='btn btn-success btn-lg mg-2'>Añadir Contacto</button>
            </div>
        </form>
    );
}

Form.propTypes = {
    add: PropTypes.func.isRequired
}

export default Form;
