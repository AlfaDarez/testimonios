import React from 'react';


function Testimonio(){
  return(
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' 
      src={require('../imagenes/testimonio-Alfredo.jpg')} 
      alt="Foto de perfil" />
      <div className='contenedor-texto-testimonio'>
         <p className='nombre-testimonio'> Jose Alfredo Valladares </p>
         <p className='cargo-testimonio'>Coordinador Educativo Telmex</p>
         <p className='texto-testimonio'> "Ejemplo de cargo de informacion puede ir un lorenipsu"</p>
      </div>
    </div>
  );
}

export default Testimonio;