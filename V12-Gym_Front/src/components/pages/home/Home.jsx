import * as S from './styleHome'
import { SideBar } from '../../sideBar/sideBar'
import { Header } from '../../header/Header'



function Home(){
    return(
        <S.container>
            <SideBar/>
            
            <S.containerContent>
               <Header />
                <S.content>

                </S.content>
            </S.containerContent>

        </S.container>
        
    )
}

export { Home }