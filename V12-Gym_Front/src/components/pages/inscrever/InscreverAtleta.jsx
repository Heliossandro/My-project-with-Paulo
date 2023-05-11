import { SideBar } from '../../sideBar/sideBar'

import { Header } from '../../header/Header'
import { Input } from '../../inputs/Input'

import * as A from './style'
import * as S from '../home/styleHome'

function InscreverAtleta() {
    return(
        <A.container>
           <SideBar />
           <S.containerContent>
                <Header name = "Atleta"/>
                <A.content>
                    <A.containerForm>
                        <form >

                            <A.line1>
                                <Input type="text" id="nomeCompleto" name="nomeCompleto" placeholder="Nome Completo" req="true"/>
                                <Input type="email" id="email" name="email" placeholder="E-mail" req="true"/>
                            </A.line1>

                            <A.line2>
                                <Input type="number" id="telefone" name="telefone" placeholder="Telefone" req="true"/>
                                <Input type="text" id="nif" name="nif" placeholder="Nif" req="true"/>
                            </A.line2>

                            <A.line3>
                                <Input type="text" id="morada" name="morada" placeholder="Morada" req="false"/>
                                <div>
                                    <div>
                                        <label htmlFor="masc">M</label>
                                        <Input type="radio" id="masc" name="sexo" req="true"/>
                                    </div>
                                    <div>
                                        <label htmlFor="fem">F</label>
                                        <Input type="radio" id="fem" name="sexo" req="true"/>
                                    </div>
                                </div>
                                
                            </A.line3>

                            <A.line4>
                                <Input  type="text" id="tipoTreino" name="tipoTreino" placeholder="Tipo de Treino" req="false"/>
                                <textarea name="desc" id="desc" cols="30" rows="10" placeholder='Descrição' req="false"></textarea>
                                <div><button>Inscrever</button></div>
                            </A.line4>
                        </form>
                    </A.containerForm>
                </A.content>
           </S.containerContent>
        </A.container>
    )
}
export { InscreverAtleta }