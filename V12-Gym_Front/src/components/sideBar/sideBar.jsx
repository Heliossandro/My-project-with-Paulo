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
      <div>
      <a href="/atleta">
        <i>
          <FaMale />
        </i>
        <p>Atletas</p>
      </a>
      </div>
      <div>
      <a href="/artigos">
        <i>
          <FaStore />
        </i>
        <p>Artigos</p>
      </a>
      </div>

      <div>
      <a href="/horario">
        <i>
          <BsClockFill />
        </i>
        <p>Horário</p>
      </a>
        </div>

        <div>  
      <a href="/mensalidade">
        <i>
          <ImPriceTag />
        </i>
        <p>Mensalidade</p>
      </a>
      </div>

  
        <div>
      <a href="/plano">
        <i>
          <FaListAlt />
        </i>
        <p>Planos</p>
      </a>
        </div>
  
        <div>
      <a href="/pagamentos">
        <i>
          <FaMoneyCheck />
        </i>
        <p>Pagamento</p>
      </a>
        </div>
  
        <div>
      <a href="#">
        <i>
          <FaPoll />
        </i>
        <p>Estatística</p>
      </a>
        </div>
  
        <div>
      <a href="documentos">
        <i>
          <IoDocumentTextOutline />
        </i>
        <p>Documentos</p>
      </a>
        
        </div>

    </S.containerLeft>
  );
}

export { SideBar };
