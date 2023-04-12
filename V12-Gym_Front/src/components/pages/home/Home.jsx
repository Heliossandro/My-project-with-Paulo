import * as S from './styleHome'
import { SideBar } from '../../sideBar/sideBar'
import {FaUserAlt} from "react-icons/fa"



function Home(){
    return(
        <S.container>


            <SideBar/>
            
            <S.containerContent>
                <S.header>
                    <div><a href="">
                    <h1>Heliossando Afonso</h1>
                        <i><FaUserAlt/></i>
                    </a>
                        
                    </div>
                </S.header>

                <S.content>

                </S.content>
            </S.containerContent>

        </S.container>
        
    )
}

export { Home }