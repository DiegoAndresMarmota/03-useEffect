import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(() => {
        //Cuando el componente se monta
        alert("El componente AvisoComponent esta cargado")

        //Cuando el componente se desmonta
        return () => {
            alert("Componente desmontado");
        };
        
    }, []); //Se ejecuta una vez, por el array vacío

  return (
      <div>  
          <hr/>
          <h3>Saludos, Diego. ¿Qué tal estás?</h3>
          <button
              onClick={e => {
                  alert("Bienvenido!")
          }}>Mostrar Alerta</button>
    </div>
  )
}
