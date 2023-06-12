import React, { useState } from 'react';
import { SideBar } from '../../sideBar/sideBar';
import { Header } from '../../header/Header';
import * as Z from './styleArtigos';
import * as A from '../artigos/StyleArtigos';
import * as S from '../home/styleHome';
import { ImPencil2 } from 'react-icons/im';

/// Componente do Modal
function Modal({ isOpen, onClose, onEdit, onDelete }) {
    const [dia, setDia]= useState('');
    const [hora, setHora] = useState('');
    const [periodo, setPeriodo] = useState('');
  
    const handleEdit = () => {
      // Lógica para atualizar os dados
      // Chame a função onEdit e passe os dados atualizados
      onEdit({ dia, hora, periodo });
  
      // Limpe os campos após a edição
      setDia('');
      setHora('');
      setPeriodo('');
  
      // Feche o modal
      onClose();
    };
  
    const handleDelete = () => {
      // Lógica para excluir a coluna
      // Chame a função onDelete
      onDelete();
  
      // Feche o modal
      onClose();
    };
  
    if (!isOpen) {
      return null;
    }
  
    return (
      <Z.ModalOverlay>
        <Z.ModalContent>
          <Z.ModalHeader>
            <button onClick={onClose}>Fechar</button>
          </Z.ModalHeader>
          <Z.ModalBody>
          <label>Plano</label>
            <input
              type="text"
              value={preco}
              onChange={(e) => setDia(e.target.value)}
            />

            <label>Plano</label>
            <input
              type="text"
              value={preco}
              onChange={(e) => setHora(e.target.value)}
            />
            <label>Periodo</label>
            <input
              type="text"
              value={observacao}
              onChange={(e) => setPeriodo(e.target.value)}
            />
          </Z.ModalBody>
          <Z.ModalFooter>
            <button onClick={handleEdit}>Salvar</button>
            <button onClick={handleDelete}>Apagar</button>
          </Z.ModalFooter>
        </Z.ModalContent>
      </Z.ModalOverlay>
    );
  }
  
  const dataTable = [
    {
        
        dia: "-Segunda-feira",
        hora: "5:30 até 12:00",
        periodo: "Manhã",
        icone: <ImPencil2     />
    }

]
  
function Horario() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleEdit = (data) => {
    // Atualize os dados na tabela com os valores fornecidos em 'data'
    // Implemente sua lógica aqui

    // Exemplo de atualização da linha selecionada
    const updatedTable = [...dataTable];
    updatedTable[selectedRow] = {
      Planos: data.planos,
      Preço: data.preco,
      Observação: data.observacao,
      icone: <ImPencil2 />,
    };

    // Atualize o estado da tabela com a linha atualizada
    setDataTable(updatedTable);
  };

  const handleDelete = () => {
    // Lógica para excluir a linha selecionada
    // Implemente sua lógica aqui

    // Exemplo de exclusão da linha selecionada
    const updatedTable = [...dataTable];
    updatedTable.splice(selectedRow, 1);

    // Atualize o estado da tabela com a linha excluída
    setDataTable(updatedTable);
  };

  return (
    <A.container>
      <SideBar />

      <S.containerContent>
        <Header name="Horario" />

        <Z.content>
          <Z.containerTable>
            <table>
              <thead>
                <tr>
                  <th>DIAS DA SEMANA</th>
                  <th>HORA</th>
                  <th>PERIODO</th>
                  <th>ACÇÃO</th>
                </tr>
              </thead>
              <tbody>
                {dataTable.map((td, index) => (
                  <tr key={index}>
                    <td>{td.dia}</td>
                    <td>{td.hora}</td>
                    <td>{td.periodo}</td>
                    <td className="icone">
                      <ImPencil2
                        onClick={() => {
                          setSelectedRow(index);
                          setIsModalOpen(true);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Z.buttonEntrar>Adicionar</Z.buttonEntrar>
          </Z.containerTable>
        </Z.content>
      </S.containerContent>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </A.container>
  );
}

export { Horario };
