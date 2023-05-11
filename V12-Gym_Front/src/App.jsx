import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {Login} from './components/login/login/Login'
import { CadastroGerente } from './components/login/cadastroDeGerentes/CadastroGerente';
import { Home } from './components/pages/home/Home';
import { Artigos } from './components/pages/artigos/Artigos';
import { Atleta } from './components/pages/atleta/Atleta';
import { Precario } from './components/pages/precario/Precario';
import { Horario } from './components/pages/horario/Horario';
import { InscreverAtleta } from './components/pages/inscrever/InscreverAtleta';
import { Plano } from './components/pages/plano/Plano';
import { Pagamentos } from './components/pages/pagamentos/Pagamentos';
import { Definicoes } from './components/pages/definicoes/Definicoes';

function App() {

  return (
   <div>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/cadastroGerente' element={<CadastroGerente/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/atleta' element={<Atleta/>} />
        <Route path='/inscreverAtleta' element={<InscreverAtleta/>} />
        <Route path='/home' element={ <Login/> }/>
        <Route path='/precario' element={ <Precario/>}/>
        <Route path='/artigos' element={<Artigos/>}/>
        <Route path='/horario' element={<Horario/>}/>
        <Route path='/plano' element={ <Plano/>}/>
        <Route path='/pagamentos' element={ <Pagamentos/>}/>
        <Route path='/definicoes' element={<Definicoes/>}/>
      </Routes>
    </BrowserRouter>

   </div>
  )
}

export default App;
