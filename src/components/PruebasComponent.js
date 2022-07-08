import React, { useEffect, useState } from 'react'

export const PruebasComponent = () => {

    //Propiedades
    const [ usuario, setUsuario ] = useState("Diego Andres");
    const [ fecha, setFecha ] = useState("01-02-2022");
    const [contador, setContador] = useState(0);

    const modUsuario = e => {
        setUsuario(e.target.value);
    };

    const cambiarfecha = e => {
        setFecha(new Date().toLocaleDateString());
    }

    useEffect(() => {
        console.log("Has cargado el componente PruebasComponent!");
    }, []); //Solo se ejecuta una vez

    //Se ejecuta solo si cambio de usuario
    useEffect(() => {
        setContador(contador + 1);
        console.log("Has modificado el usuario: " + contador);
    }, [fecha, usuario]); 

  return (
    <div>
          <h1>El efecto - Hook useEffect</h1>
          <strong className={ contador >= 10 ? 'label label-green' : 'label'}>{ usuario }</strong>
          <strong>{ fecha }</strong>
        <p>
            <input
              type="text"
              onChange={modUsuario}
              placeholder="Cambia el nombre" 
            />
              <button
                  onclick={cambiarfecha}>
                  Cambiar Fecha</button>  
        </p>
    </div>
  )
}
