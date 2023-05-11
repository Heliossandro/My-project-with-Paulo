import { SideBar } from '../../sideBar/sideBar'

import { Header } from '../../header/Header'
import { Input } from '../../inputs/Input'

import * as A from './stylePagamentos'
import * as S from '../home/styleHome'

function Pagamentos() {
    return(
        <A.container>
           <SideBar />
           <S.containerContent>
                <Header name = "Pagamentos"/>
                <A.content>
                    <A.containerForm>
                        <form >

                            <A.line1>
                                <Input type="text" id="nomeDoAtleta" name="nomeDoAtleta" placeholder="Nome do atleta" req="true"/>
                            </A.line1>

                            <A.line2>
                                <Input type="number" id="quantidade" name="quantidade" placeholder="quantidade" req="true"/>
                        
                            </A.line2>

                            <A.line4>
                                <textarea name="Finalidade" id="Finalidade" cols="30" rows="10" placeholder='Finalidade' req="true"></textarea>
                                <div><button>Pagar</button></div>
                            </A.line4>
                        </form>
                    </A.containerForm>
                </A.content>
           </S.containerContent>
        </A.container>
    )
}
export { Pagamentos }