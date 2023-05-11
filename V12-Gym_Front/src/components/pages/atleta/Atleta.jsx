import { SideBar } from "../../sideBar/sideBar"
import * as A from './styleAtleta'
import * as S from '../home/styleHome'
import { Header } from "../../header/Header"
import  { ImPencil2 } from 'react-icons/im'

const dataTable = [
    {
        "id": "1",
        "nome": "Heliossandro Afonso",
        "sexo": "M",
        "email": "zenosama@gmail.com",
        "contacto": "947924057",
        "icone": <ImPencil2     />
    },
    
    {
        "id": "1",
        "nome": "Heliossandro Afonso",
        "sexo": "M",
        "email": "zenosama@gmail.com",
        "contacto": "947924057",
        "icone": <ImPencil2     />
    },

    {
        "id": "1",
        "nome": "Heliossandro Afonso",
        "sexo": "M",
        "email": "zenosama@gmail.com",
        "contacto": "947924057",
        "icone": <ImPencil2     />
    },

    {
        "id": "1",
        "nome": "Heliossandro Afonso",
        "sexo": "M",
        "email": "zenosama@gmail.com",
        "contacto": "947924057",
        "icone": <ImPencil2     />
    },

    {
        "id": "1",
        "nome": "Heliossandro Afonso",
        "sexo": "M",
        "email": "zenosama@gmail.com",
        "contacto": "947924057",
        "icone": <ImPencil2     />
    },

    {
        "id": "1",
        "nome": "Heliossandro Afonso",
        "sexo": "M",
        "email": "zenosama@gmail.com",
        "contacto": "947924057",
        "icone": <ImPencil2     />
    },
]

function Atleta() {
    return(
       <A.container>

        <SideBar />
        
        <S.containerContent>
            <Header name="Atletas"/>

            <A.content>
                <A.containerTable>

                    <div className="pesquisar">
                        <input className="pesquisar1"></input> 
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th className="id">id</th>
                                <th>nome</th>
                                <th>sexo</th>
                                <th className="id">email</th>
                                <th>contacto</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataTable.map((td, index) => (
                                <tr key={index}>
                                    <td className="id">{td.id}</td>
                                    <td>{td.nome}</td>
                                    <td>{td.sexo}</td>
                                    <td className="id">{td.email}</td>
                                    <td>{td.contacto}</td>
                                    <td className="icone">{td.icone}</td>
                                </tr>
                            ))}
                    
                        </tbody>
                    </table>
                    <A.containerButtom>
                        <a href="/inscreverAtleta">Inscrever</a>
                    </A.containerButtom>
                </A.containerTable>

                
            </A.content>
        </S.containerContent>

       </A.container>
    )
}

export {Atleta}