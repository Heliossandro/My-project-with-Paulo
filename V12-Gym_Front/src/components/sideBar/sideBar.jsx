import * as S from './sideBarStyles'
import { FaMale, FaListAlt, FaPoll, FaStore, FaMoneyCheck} from "react-icons/fa";

import { AiFillSetting } from 'react-icons/ai'
import { BsClockFill } from 'react-icons/bs'
import { IoDocumentTextOutline } from 'react-icons/io5';
import { ImPriceTag } from 'react-icons/im';

function SideBar() {
    
    return(
        <S.containerLeft>
                <S.sideBar>
                    <a href="/atleta">
                        <i><FaMale/></i>
                        <p>Atletas</p>
                    </a>

                    <a href="/artigos">
                        <i><FaStore/></i>
                        <p>Artigos</p>
                    </a>
                    <a href="/mensalidade">
                        <i><ImPriceTag/></i>
                        <p>Mensalidade</p>
                    </a>
                    <a href="/horario">
                        <i><BsClockFill/></i>
                        <p>Horário</p>
                    </a>
                    <a href="/plano">
                        <i><FaListAlt/></i>
                        <p>Planos</p>
                    </a>
                    <a href="/pagamentos">

                        <i><FaMoneyCheck/></i>
                        <p>Pagamento</p>
                    </a>
                    <a href="#">
                        <i><FaPoll/></i>
                        <p>Estatística</p>
                    </a>
                    <a href="documentos">
                        <i><IoDocumentTextOutline/></i>
                        <p>Documentos</p>
                    </a>
                </S.sideBar>

                </S.containerLeft>
    )
}

export {SideBar}