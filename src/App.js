import logo from './logo.svg';
import './App.css';
import peliculasJson from './peliculas.json';
import PageWrapper from './pageWrapper';
import Pelicula from './pelicula';

function App() {
  let peliculas = peliculasJson;
  return (
    <div>
      <PageWrapper>
       
       
       { peliculas.map( pelicula =>
         <Pelicula img={pelicula.img} titulo={pelicula.titulo} 
          calificacion={pelicula.calificacion} director={pelicula.director}
           actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion}
         >
            {pelicula.descripcion}
          </Pelicula>

       )

       }
        

       
      </PageWrapper>

    </div>
  );
}

export default App;
