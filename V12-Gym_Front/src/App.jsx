import { Login } from "./components/login/login/Login"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CadastroGerente } from "./components/login/cadastroDeGerentes/CadastroGerente"

function App() {

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/cadastroGerente" element={<CadastroGerente/>}/>
      </Routes>

      <Routes>
        <Route path= '/' element={<CadastroGerente/>}/>
        <Route path= '/Login' element={<Login/>}/>
      </Routes>
         
    </BrowserRouter>
    
  )
}

export default App
