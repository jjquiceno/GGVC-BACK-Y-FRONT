import React from 'react'
import './formLogin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from "react-router-dom" 
// import { Routes, Route, Link } from 'react-router-dom';

export const FormLogin = () => {

  const navigate = useNavigate()

  return (
    <div className="form">
      <h1 className='text-black font-bold'>INICIAR SESIÓN</h1>

      <br /><br />

      <form onSubmit={e => {e.preventDefault(); navigate('/welcome')}}>
        <div className="input-icon">
          <input type="text" id="usuario" placeholder="Usuario" required />
          <FontAwesomeIcon icon={faUser} className="icon" />
        </div>

        <br /><br />

        <div className="input-icon">
          <input type="password" id="password" name="password" placeholder="Contraseña" required />
          <FontAwesomeIcon icon={faLock} className="icon" />
        </div>

        <br /><br />

        <button className='boton-login' type="submit">Ingresar</button>

        <br /><br />

        <p>Olvidé mi <Link to="/login">Contraseña</Link></p>
        <p>Aún no tengo una cuenta <Link to="/register">Registrarse</Link></p>
      </form>
    </div>
  )
}