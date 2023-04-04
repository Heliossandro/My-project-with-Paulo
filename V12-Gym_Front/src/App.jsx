import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {Login} from './components/login/login/Login'
import { CadastroGerente } from './components/login/cadastroDeGerentes/CadastroGerente';
import { Home } from './components/pages/home/Home';

function App() {

  return (
   <div>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/cadastroGerente' element={<CadastroGerente/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>

   </div>
  )
}

export default App;
