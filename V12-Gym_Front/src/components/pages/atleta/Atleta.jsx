import { SideBar } from "../../sideBar/sideBar";
import * as A from './styleAtleta';
import * as S from '../home/styleHome';
import { Header } from '../../header/Header';
import { FiSearch } from "react-icons/fi";
import { ImPencil2 } from 'react-icons/im';
import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

function Atleta() {
  const [dataTable, setDataTable] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedField, setSelectedField] = useState(null);
  
  // Função para abrir o modal e selecionar o campo
  const handleEditField = (field) => {
    setSelectedField(field);
    setShowModal(true);
  };

  useEffect(() => {
    // Aqui você pode fazer a chamada para o banco de dados local e obter os dados
    const fetchData = async () => {
      // Simulação de uma chamada assíncrona para obter os dados do banco de dados
      const response = await fetch('http://localhost:5432/v12GymBD');
      const data = await response.json();
      setDataTable(data);
    };

    fetchData();
  }, []);

  return (
    <A.Container>
      <SideBar/>
      <S.containerContent>
        <Header name="Atletas"/>
        <A.Content>
          <A.ContainerTable>
            <A.Pesquisar>
              <div className="search-bar">
                <input type="text" placeholder="Pesquisar" />
                <button type="submit">
                  <FiSearch />
                </button>
              </div>
            </A.Pesquisar>
                            
            <table id="tabela-pedidos">
              <thead>
                <tr>
                  <th className="id1">id</th>
                  <th>nome</th>
                  <th className="id">sexo</th>
                  <th className="id">email</th>
                  <th>contacto</th>
                  <th>Acção</th>
                </tr>
              </thead>
              <tbody>
                {dataTable.map((td, index) => (
                  <tr key={index}>
                    <td className="id1">{td.id}</td>
                    <td>{td.nome}</td>
                    <td className="id">{td.sexo}</td>
                    <td className="id">{td.email}</td>
                    <td>{td.contacto}</td>
                    <td className="icone">
                      <button onClick={() => handleEditField(td)}>
                        <ImPencil2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <A.ContainerButtom>
              <a href="/inscreverAtleta">Inscrever</a>
            </A.ContainerButtom>
          </A.ContainerTable>

          {selectedField && (
            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Editar Campo</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>ID: {selectedField.id}</p>
                <p>Nome: {selectedField.nome}</p>
                <p>Sexo: {selectedField.sexo}</p>
                <p>Email: {selectedField.email}</p>
                <p>Contacto: {selectedField.contacto}</p>
                {/* Aqui você pode adicionar os campos de atualização e exclusão */}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Fechar
                </Button>
              </Modal.Footer>
            </Modal>
          )}
        </A.Content>
      </S.containerContent>
    </A.Container>
  );
}

export { Atleta };
