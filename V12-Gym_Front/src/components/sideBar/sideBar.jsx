import * as S from './sideBarStyles'
import {FaMale} from 'react-icons/fa'
import { FaListAlt } from 'react-icons/fa'
import { FaPoll } from 'react-icons/fa'
import { FaStore } from "react-icons/fa"
import { FaMoneyCheck } from "react-icons/fa"
import { AiFillSetting } from "react-icons/ai"
import {BsClockFill} from "react-icons/bs"
import {IoDocumentTextOutline} from "react-icons/io5"
import {ImPriceTag} from "react-icons/im"


function SideBar() {
    return(
        <S.containerLeft>
                <S.sideBar>
                    <a href="/atleta" className='item5'>
                        <i><FaMale/></i>
                        <p>Atletas</p>
                    </a>
                    <a href="#" className='s'>
                        <i><FaStore/></i>
                        <p>Artigos</p>
                    </a>
                    <a href="#">
                        <i><ImPriceTag/></i>
                        <p>Preçário</p>
                    </a>
                    <a href="#">
                        <i><BsClockFill/></i>
                        <p>Horário</p>
                    </a>
                    <a href="#">
                        <i><FaListAlt/></i>
                        <p>Planos</p>
                    </a>
                    <a href="#">
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

                <a href="#" className='config'>
                    <i> <AiFillSetting/> </i>
                    <p>Definições</p>
                </a>
            </S.containerLeft>
    )
}

export {SideBar}