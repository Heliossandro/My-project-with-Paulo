import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {Login} from './components/login/login/Login'
import { CadastroGerente } from './components/login/cadastroDeGerentes/CadastroGerente';
import { Home } from './components/pages/home/Home';
import { Atleta } from './components/pages/atleta/Atleta';

function App() {

  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/cadastroGerente' element={<CadastroGerente/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/atleta' element={<Atleta/>}/>
      </Routes>
    </BrowserRouter>

   </div>
  )
}

export default App;
