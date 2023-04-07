import * as S from './styleHome'
import { SideBar } from '../../sideBar/sideBar'



function Home(){
    return(
        <S.container>

            <SideBar/>
            
            <S.containerContent>
                <S.header>
                    <div>
                        <h1>Heliossando Afonso</h1>
                    </div>
                </S.header>

                <S.content>

                </S.content>
            </S.containerContent>

        </S.container>
    )
}

export { Home }