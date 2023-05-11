import { SideBar } from '../../sideBar/sideBar'
import { Header } from '../../header/Header'

import * as A from './stylePlano'
import * as S from '../home/styleHome'

const dataTable = [
    {
        "DiaSemana": "Segunda-Feira",
        "Plano": "Plano",
    },
    
    {
        "DiaSemana": "Terça-Feira",
        "Plano": "Plano",
    },

    {
        "DiaSemana": "Quarta-Feira",
        "Plano": "Plano",
    },

    {
        "DiaSemana": "Quinta-Feira",
        "Plano": "Plano",
    },

    {
        "DiaSemana": "Sexta-Feira",
        "Plano": "Plano",
    },

    {
        "DiaSemana": "Sábado",
        "Plano": "Plano",
    },
]


function Plano() {
    return(
        <A.container>
            <SideBar />
            <S.containerContent>
                <Header name = "Planos de Treino"/>

                <A.content>
                <A.containerTable>
                    <table>
                        <thead>
                            <tr>
                                <th>Dias da Semana</th>
                                <th>Planos</th>
                                <th>Utilização</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataTable.map((td, index) => (
                                <tr key={index}>
                                    <td>{td.DiaSemana}</td>
                                    <td>{td.Plano}</td>
                                    <td>
                                        <div>
                                            <A.btn1 href="#">Abrir</A.btn1>
                                            <A.btn2 href="#">Novo</A.btn2>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    
                        </tbody>
                        
                    </table>
                </A.containerTable>
                </A.content>
            </S.containerContent>
        </A.container>
    )
}

export {Plano}