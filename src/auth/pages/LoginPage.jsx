import React from 'react'
import { useContext } from 'react';

import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const navigate = useNavigate();

  const { login }  = useContext(AuthContext);

  const onLogin = () => {

    login('LUCAS AMAYA');
    
    navigate("/", {
      replace: true,
    });
  };

  return (

    <section className='loginContainer'>
    <div className="fondoLogin ">
      <h1 className='entrada'>Deseas Entrar</h1>
      <hr />

      <button className="btn btn-primary" onClick={onLogin}>
        Aceptar!!
      </button>
    </div>
    </section>
  );
};