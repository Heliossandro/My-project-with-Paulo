import { SideBar } from "../../sideBar/sideBar";
import { Header } from "../../header/Header";
import * as Z from './styleArtigos'
import * as A from '../artigos/StyleArtigos'
import * as S from '../home/styleHome'
import  { ImPencil2 } from 'react-icons/im'

const dataTable = [
    {
        
        "dia": "-Segunda-feira",
        "hora": "5:30 até 12:00",
        "periodo": "Manhã",
        "icone": <ImPencil2     />
    },
    
    {
        "dia": "-Terça-feira",
        "hora": "5:30 até 12:00",
        "periodo": "Manhã",
        "icone": <ImPencil2     />
    },

    {
        "dia": "-Quarta-feira",
        "hora": "5:30 até 12:00",
        "periodo": "Manhã",
        "icone": <ImPencil2     />
    },

    {
        "dia": "-Quinta-feira",
        "hora": "5:30 até 12:00",
        "periodo": "Manhã",
        "icone": <ImPencil2     />
    },
    {
        "dia": "-Sexta-feira",
        "hora": "5:30 até 12:00",
        "periodo": "Manhã",
        "icone": <ImPencil2     />
    },
    {
        "dia": "-Sábado-feira",
        "hora": "5:30 até 12:00",
        "periodo": "Manhã",
        "icone": <ImPencil2     />
    },

]


function Horario(){
    return(
        <A.container>

        <SideBar />
        
        <S.containerContent>
            <Header name="Horario"/>
            <Z.content>
                <Z.containerTable>
                <table>
                        <thead>
                            <tr>
                                <th >DIAS DA SEMANA</th>
                                <th>HORA</th>
                                <th>PERIODO</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataTable.map((td, index) => (
                                <tr key={index}>
                                    <td>{td.dia}</td>
                                    <td>{td.hora}</td>
                                    <td>{td.periodo}</td>
                                    <td className="icone">{td.icone}</td>
                                </tr>
                            ))}
                    
                        </tbody>
                    </table>
                </Z.containerTable>  
            </Z.content>
        </S.containerContent>
       </A.container>
    )
}

export{Horario}