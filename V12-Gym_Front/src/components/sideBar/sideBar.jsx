import * as S from './sideBarStyles'
import {FaPersonBooth} from 'react-icons/fa'

function SideBar() {
    return(
        <S.containerLeft>
                <S.sideBar>
                    <a href="/atleta">
                        <i><FaPersonBooth/></i>
                        <p>Atletas</p>
                    </a>
                    <a href="#">
                        <i><FaPersonBooth/></i>
                        <p>Artigos</p>
                    </a>
                    <a href="#">
                        <i><FaPersonBooth/></i>
                        <p>Preçário</p>
                    </a>
                    <a href="#">
                        <i><FaPersonBooth/></i>
                        <p>Horário</p>
                    </a>
                    <a href="#">
                        <i><FaPersonBooth/></i>
                        <p>Planos</p>
                    </a>
                    <a href="#">
                        <i><FaPersonBooth/></i>
                        <p>Pagamento</p>
                    </a>
                    <a href="#">
                        <i><FaPersonBooth/></i>
                        <p>Estatística</p>
                    </a>
                    <a href="#">
                        <i><FaPersonBooth/></i>
                        <p>Documentos</p>
                    </a>
                </S.sideBar>

                <a href="">
                    <i></i>
                    <p>Definições</p>
                </a>
            </S.containerLeft>
    )
}

export {SideBar}