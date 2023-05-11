import * as Q from './StyleArtigos'
import * as S from '../home/styleHome'
import { SideBar } from '../../sideBar/sideBar'
import { Header } from '../../header/Header'
 

function Artigos (){
    return(
      <Q.container>
            <SideBar />
         <S.containerContent>
         <Header  name = "Artigos"/>
         <Q.content>
            <Q.containerOpcoes>
                
                <div>
                    <a href="#">TUDO</a>
                </div>

                <div>
                    <a href="#">NOVOS</a>
                </div>

                <div>
                    <a href="#">MATERIAS DO GYM</a>
                </div>

                <div>
                    <a href="#">DISPONIVEIS</a>
                </div>

                <div>                   
                    <a href="#">ADICIONAR ITENS</a>
                </div>

            </Q.containerOpcoes>
         </Q.content>
        </S.containerContent>
      </Q.container>
    )
}  

export {Artigos}