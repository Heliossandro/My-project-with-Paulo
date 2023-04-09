import * as S from './sideBarStyles'
import {GiPerson} from 'react-icons/fa'
import {FaMoneyCheck} from 'react-icons/fa'
import {SiShopee} from 'react-icons/fa'
import {BsFillClockFill} from 'react-icons/fa'
import {GrPlan} from 'react-icons/fa'
import {BsFillCreditCardFill} from 'react-icons/fa'
import {GoGraph} from 'react-icons/fa'
import {HiDocument} from 'react-icons/fa'
import {IoMdSettings} from 'react-icons/fa'

function SideBar() {
    return(
        <S.containerLeft>
                <S.sideBar>
                    <a href="/atleta">
                        <i><GiPerson/></i>
                        <p>Atletas</p>
                    </a>
                    <a href="#">
                        <i><FaMoneyCheck/></i>
                        <p>Artigos</p>
                    </a>
                    <a href="#">
                        <i><SiShopee/></i>
                        <p>Preçário</p>
                    </a>
                    <a href="#">
                        <i><BsFillClockFill/></i>
                        <p>Horário</p>
                    </a>
                    <a href="#">
                        <i><GrPlan/></i>
                        <p>Planos</p>
                    </a>
                    <a href="#">
                        <i><BsFillCreditCardFill/></i>
                        <p>Pagamento</p>
                    </a>
                    <a href="#">
                        <i><GoGraph/></i>
                        <p>Estatística</p>
                    </a>
                    <a href="#">
                        <i><HiDocument/></i>
                        <p>Documentos</p>
                    </a>
                </S.sideBar>

                <a href="">
                    <i> <IoMdSettings/> </i>
                    <p>Definições</p>
                </a>
            </S.containerLeft>
    )
}

export {SideBar}