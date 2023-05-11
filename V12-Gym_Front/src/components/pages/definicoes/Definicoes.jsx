import * as Q from './StyleDefinicoes'
import * as S from '../home/styleHome'
import { SideBar } from '../../sideBar/sideBar'
import { Header } from '../../header/Header'
 

function Definicoes(){
    return(
      <Q.container>
            <SideBar />
         <S.containerContent>
         <Header  name = "Definicoes"/>
         <Q.content>
            <Q.containerOpcoes>
                
                <div>
                    <a href="#">Conta</a>
                </div>

                <div>
                    <a href="#">Sobre</a>
                </div>

                <div>                   
                    <a href="#">Sair</a>
                </div>

            </Q.containerOpcoes>
         </Q.content>
        </S.containerContent>
      </Q.container>
    )
}  

export {Definicoes}