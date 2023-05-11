import * as S from './sideBarStyles'
import { FaMale } from "react-icons/fa";
import { FaListAlt } from 'react-icons/fa';
import { FaPoll } from 'react-icons/fa';
import { FaStore } from 'react-icons/fa';
import { FaMoneyCheck } from 'react-icons/fa';
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
                    <a href="/precario">
                        <i><ImPriceTag/></i>
                        <p>Preçário</p>
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
                    <a href="#">
                        <i><IoDocumentTextOutline/></i>
                        <p>Documentos</p>
                    </a>
                </S.sideBar>
                <div>
                    <a href="/difinicoes">
                     <i><AiFillSetting size={20}/></i>
                     
                    </a>
                </div>
                
            </S.containerLeft>
    )
}

export {SideBar}