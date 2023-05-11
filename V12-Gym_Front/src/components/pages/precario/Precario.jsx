import { SideBar } from "../../sideBar/sideBar"
import * as A from './stylePrecario'
import * as S from '../home/styleHome'

import { Header } from "../../header/Header"
import  { ImPencil2 } from 'react-icons/im'

const dataTable = [
    {
        
        "Planos": "-5 vezes na semana",
        "Preço": "10000kz",
        "Observação": "Individual",
        "icone": <ImPencil2     />
    },
    
    {
        "Planos": "-2 vezes na semana",
        "Preço": "16000kz ",
        "Observação": "Personalizado",
        "icone": <ImPencil2     />
    },

    {
        "Planos": "-3 vezes na semana",
        "Preço": "18000kz ",
        "Observação": "Personalizado",
        "icone": <ImPencil2     />
    },

    {
        "Planos": "-5 vezes na semana",
        "Preço": "20000kz ",
        "Observação": "Personalizado",
        "icone": <ImPencil2     />
    },

]

function Precario() {
    return(
       <A.container>

        <SideBar />
        
        <S.containerContent>
            <Header name="Precario"/>

            <A.content>
                <A.containerTable>
                    <table>
                        <thead>
                            <tr>
                                <th >Planos</th>
                                <th>Preço</th>
                                <th>Observação</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataTable.map((td, index) => (
                                <tr key={index}>
                                    <td>{td.Planos}</td>
                                    <td>{td.Preço}</td>
                                    <td>{td.Observação}</td>
                                    <td className="icone">{td.icone}</td>
                                </tr>
                            ))}
                    <A.buttonEntrar>Criar Plano</A.buttonEntrar>
                        </tbody>
                    </table>
                </A.containerTable>
            </A.content>
        </S.containerContent>

       </A.container>
    )
}

export {Precario}