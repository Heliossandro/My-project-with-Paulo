import { SideBar } from "../../sideBar/sideBar";
import * as A from "./styleAtleta";
import * as S from "../home/styleHome";
import { Header } from "../../header/Header";
import { RxTriangleDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { ImPencil2 } from "react-icons/im";
import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

function Atleta() {
  const [dataTable, setDataTable] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedField, setSelectedField] = useState(null);

  const handleEditField = (field) => {
    setSelectedField(field);
    setShowModal(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4040/atleta/list");
      const data = await response.json();
      setDataTable(data);
    };

    fetchData();
  }, []);

  return (
    <A.Container>
      <SideBar />
      <S.containerContent>
        <Header name="Atletas" />
        <A.Content>
          <A.ContainerTable>
            <form>
              <A.FirstSection>
                <section>
                  <input
                    //type="search"
                    name=""
                    id=""
                    placeholder="Pesquisar..."
                  />
                  <CiSearch />
                </section>
              </A.FirstSection>
              <A.ContainerButtom>
                <a href="/inscreverAtleta">Inscrever</a>
              </A.ContainerButtom>
            </form>

            <table id="tabela-pedidos">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th className="id">Sexo</th>
                  <th className="">Tipo de treino</th>
                  <th className="id1">E-mail</th>
                  <th>Contacto</th>
                  <th>Acção</th>
                </tr>
              </thead>
              <tbody>
                {dataTable.map((td) => (
                  <tr key={td.id}>
                    <td>{td.name}</td>
                    <td className="id">{td.gender}</td>
                    <td className="">{td.kindOfTraining}</td>
                    <td className="id1">{td.email}</td>
                    <td>{td.phone_number}</td>
                    <td className="icone">
                      <button onClick={() => handleEditField(td)}>
                        <ImPencil2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </A.ContainerTable>
        </A.Content>
      </S.containerContent>
    </A.Container>
  );
}

export { Atleta };
