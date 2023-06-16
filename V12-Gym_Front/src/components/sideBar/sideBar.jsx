import * as S from "./sideBarStyles";
import {
  FaMale,
  FaListAlt,
  FaPoll,
  FaStore,
  FaMoneyCheck,
} from "react-icons/fa";

import { AiFillSetting } from "react-icons/ai";
import { BsClockFill } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { ImPriceTag } from "react-icons/im";

function SideBar() {
  return (
    <S.containerLeft>
      <div className="divmae">

      <div>
      <span>V12 Gym</span>
      <a href="/atleta">
        <i>
          <FaMale size={27}/>
        </i>
        <p>Atletas</p>
      </a>
      </div>
      <div>
      <a href="/artigos">
        <i>
          <FaStore size={27}/>
        </i>
        <p>Artigos</p>
      </a>
      </div>

      <div>
      <a href="/horario">
        <i>
          <BsClockFill size={20}/>
        </i>
        <p>Horário</p>
      </a>
        </div>

        <div>  
      <a href="/mensalidade">
        <i>
          <ImPriceTag size={20}/>
        </i>
        <p>Mensalidade</p>
      </a>
      </div>

  
        <div>
      <a href="/plano">
        <i>
          <FaListAlt size={20}/>
        </i>
        <p>Planos</p>
      </a>
        </div>
  
        <div>
      <a href="/pagamentos">
        <i>
          <FaMoneyCheck size={20}/>
        </i>
        <p>Pagamento</p>
      </a>
        </div>
  
        <div>
      <a href="/estatisticas">
        <i>
          <FaPoll size={20}/>
        </i>
        <p>Estatística</p>
      </a>
        </div>
  
        <div>
      <a href="documentos">
        <i>
          <IoDocumentTextOutline size={20}/>
        </i>
        <p>Documentos</p>
      </a>
        
        </div>
      </div>

    </S.containerLeft>
  );
}

export { SideBar };
