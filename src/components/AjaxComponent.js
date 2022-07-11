import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

  const [usuarios, setUsuarios] = useState([]);

// Generico/básico
const getUsuariosEstaticos = () => {
  setUsuarios([
    {
      "id": 1,
      "email": "victor@reqres.in",
      "first_name": "Victor",
      "last_name": "Robles"
    },
    {
      "id": 2,
      "email": "pablo@reqres.in",
      "first_name": "Pablo",
      "last_name": "Sanchez"
    },
    {
      "id": 3,
      "email": "carlos@reqres.in",
      "first_name": "Carlos",
      "last_name": "Perez"
    },
    
  ]);
  }

  const getUsuariosAjaxPms = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then(respuesta => respuesta.json())
      .then(resultado_final => {          
        setUsuarios(resultado_final.data)
        console.log(usuarios)
      },
        error => {
          console.log("Error");
      })
  }

  const getUsuariosAjaxAW = async() => {
    const peticion = await fetch("https://reqres.in/api/users?page=1");
    const { data } = await peticion.json();
    
    setUsuarios(data);
  }
  
  useEffect(() => {
    //getUsuariosEstaticos();
    //getUsuariosAjaxPms();
    getUsuariosAjaxAW();
  },[])

  return (
    <div>
          <h2>
              Listado usuarios Ajax
          </h2>
          <ol className='usuarios'>
            {
              usuarios.map(usuario => {
                return <li key= {usuario.id}>
                                {usuario.first_name}
                                {usuario.last_name}
                       </li>
              })
            }
          </ol>
    </div>
  )
}
