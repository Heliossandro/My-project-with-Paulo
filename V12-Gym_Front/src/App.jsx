import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/login/login/Login";
import { Gerente } from "./components/login/gerente/Gerente";
import { CadastroGerente } from "./components/login/cadastroDeGerentes/CadastroGerente";
import { Home } from "./components/pages/home/Home";
import { Artigos } from "./components/pages/artigos/Artigos";
import { Atleta } from "./components/pages/atleta/Atleta";
import { Mensalidade } from "./components/pages/mensalidade/Mensalidade";
import { Horario } from "./components/pages/horario/Horario";
import { InscreverAtleta } from "./components/pages/inscrever/InscreverAtleta";
import { Plano } from "./components/pages/plano/Plano";
import { CriacaoDePlano } from "./components/pages/plano/criacaoDePlano/CriacaoDePlano";
import { Documentos } from "./components/pages/documentos/Documentos";
import { Pagamentos } from "./components/pages/pagamentos/Pagamentos";
import { AdicionarItem } from "./components/pages/artigos/adicionarItem/AdicionarItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/gerente" element={<Gerente />} />
          <Route path="/cadastroGerente" element={<CadastroGerente />} />
          <Route path="/home" element={<Home />} />
          <Route path="/atleta" element={<Atleta />} />
          <Route path="/inscreverAtleta" element={<InscreverAtleta />} />
          <Route path="/home" element={<Login />} />
          <Route path="/mensalidade" element={<Mensalidade />} />
          <Route path="/artigos" element={<Artigos />} />
          <Route path="/horario" element={<Horario />} />
          <Route path="/plano" element={<Plano />} />
          <Route path="/criacaoDeplano" element={<CriacaoDePlano />} />
          <Route path="/pagamentos" element={<Pagamentos />} />
          <Route path="/documentos" element={<Documentos />} />
          <Route path="/adicionarItem" element={<AdicionarItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
