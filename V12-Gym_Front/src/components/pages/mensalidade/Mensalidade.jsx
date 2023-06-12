import React, { useState } from 'react';
import { SideBar } from '../../sideBar/sideBar';
import * as A from './styleMensalidade';
import * as S from '../home/styleHome';
import { Header } from '../../header/Header';
import { ImPencil2 } from 'react-icons/im';

// Componente do Modal
function Modal({ isOpen, onClose, onEdit, onDelete }) {
  const [planos, setPlanos] = useState('');
  const [preco, setPreco] = useState('');
  const [observacao, setObservacao] = useState('');

  const handleEdit = () => {
    // Lógica para atualizar os dados
    // Chame a função onEdit e passe os dados atualizados
    onEdit({ planos, preco, observacao });

    // Limpe os campos após a edição
    setPlanos('');
    setPreco('');
    setObservacao('');

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
    <A.ModalOverlay>
      <A.ModalContent>
        <A.ModalHeader>
          <button onClick={onClose}>Fechar</button>
        </A.ModalHeader>
        <A.ModalBody>
          <label>Planos</label>
          <input
            type="text"
            value={planos}
            onChange={(e) => setPlanos(e.target.value)}
          />
          <label>Preço</label>
          <input
            type="text"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
          <label>Observação</label>
          <input
            type="text"
            value={observacao}
            onChange={(e) => setObservacao(e.target.value)}
          />
        </A.ModalBody>
        <A.ModalFooter>
          <button onClick={handleEdit}>Salvar</button>
          <button onClick={handleDelete}>Apagar</button>
        </A.ModalFooter>
      </A.ModalContent>
    </A.ModalOverlay>
  );
}

const dataTable = [
  {
    Planos: '-5 vezes na semana',
    Preço: '10000kz',
    Observação: 'Individual',
    icone: <ImPencil2 />,
  },
  {
    Planos: '-2 vezes na semana',
    Preço: '16000kz ',
    Observação: 'Personalizado',
    icone: <ImPencil2 />,
  },
  {
    Planos: '-3 vezes na semana',
    Preço: '18000kz ',
    Observação: 'Personalizado',
    icone: <ImPencil2 />,
  },
  {
    Planos: '-5 vezes na semana',
    Preço: '20000kz ',
    Observação: 'Personalizado',
    icone: <ImPencil2 />,
  },
];

function Mensalidade() {
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
        <Header name="mensalidade" />

        <A.content>
          <A.containerTable>
            <table>
              <thead>
                <tr>
                  <th>Planos</th>
                  <th>Preço</th>
                  <th className="observacao">Observação</th>
                  <th>ação</th>
                </tr>
              </thead>
              <tbody>
                {dataTable.map((td, index) => (
                  <tr key={index}>
                    <td>{td.Planos}</td>
                    <td>{td.Preço}</td>
                    <td className="observacao">{td.Observação}</td>
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
            <A.buttonEntrar>Adicionar</A.buttonEntrar>
          </A.containerTable>
        </A.content>
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

export { Mensalidade };
