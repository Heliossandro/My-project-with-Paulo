import {FaFacebook} from 'react-icons/fa'
import * as S from './styleHome'



function Home(){
    return(
        <S.container>
            
            <S.sideBar>
             
            </S.sideBar>
            
            <S.containerContent>
            <S.header>
                <S.navbar class="navbar">
                     <ul class='links'> 
                        <li><a href="a">Atletas</a></li>
                        <li><a href="s">Loja</a></li>
                        <li><a href="d">Preçarios</a></li>
                        <li><a href="f">Horario</a></li>
                        <li><a href="g">Planos</a></li>
                        <li><a href="g">Estatisticas</a></li>
                        <li><a href="g">Documentos</a></li>
                     </ul>
                </S.navbar>
            </S.header>
                

                <S.content>

                </S.content>
            </S.containerContent>

        </S.container>
        
    )
}

export { Home }