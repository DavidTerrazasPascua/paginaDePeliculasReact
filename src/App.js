
import {  BrowserRouter,  Route, Routes} from 'react-router-dom';
// Routes :instead of "Switch"
import ListadoPeliculas from './views/ListadoPeliculas';
import Blog from './views/Blog';

  

function App() {
 
  return ( 
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ListadoPeliculas/>}/>   
      <Route path="/blog" element={<Blog/>}/>        
    </Routes>
  </BrowserRouter>
   );
}

export default App;
