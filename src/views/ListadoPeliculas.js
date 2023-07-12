import peliculasJson from './peliculas.json';
import PageWrapper from './pageWrapper';
import Pelicula from './pelicula';
import Paginacion from './Paginacion';
import { useState } from 'react';


function ListadoPeliculas() {
  const TOTAL_POR_PAGINA= 3;
  const [paginaActual , setPaginaActual]= useState(1);
  //const [peliculas , setPeliculas]=useState([]);
  
  let peliculas = peliculasJson; // esta archivo se uso de prueba
  
  /* let buscarPeliculas= async ()=>{
    // esta url : https://cors-anywhere.herokuapp.com/ , resuelve el 
    // problema de los cors
    //El link de descarga no funciona
    //let respuesta = await fetch(url, {
       "method": 'GET', "headers": {
         "Accept": 'application/json', "Context-Type": 'application/json',
         "Origin" : 'https://raw.githubusercontent.com/'
       }
     });
     let json = await respuesta.json();
     setPeliculas(json);
   }
   useEffect(()=>{
     //se ejecuta solamente la primera vez que se carga la pagina
     //cuando el array del segundo parametro de la funcion esta vacio
     buscarPeliculas()
  },[])
    ;*/   
   
   const getTotalPaginas=()=>{
      let cantidadTotalPeliculas= peliculasJson.length;
      return Math.ceil(cantidadTotalPeliculas / TOTAL_POR_PAGINA)
   }
   let peliculasPorPagina= peliculas.slice( (paginaActual - 1) * TOTAL_POR_PAGINA ,
   paginaActual * TOTAL_POR_PAGINA);

  return (
    <div>
      <PageWrapper>
       
       
       { peliculasPorPagina.map( pelicula =>
         <Pelicula img={pelicula.img} titulo={pelicula.titulo} 
          calificacion={pelicula.calificacion} director={pelicula.director}
           actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion}
         >
            {pelicula.descripcion}
          </Pelicula>

       )

       }
        <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={
          (pagina)=>{
              setPaginaActual(pagina)
          }
        }/>

       
      </PageWrapper>

    </div>
  );
}

export default ListadoPeliculas;
