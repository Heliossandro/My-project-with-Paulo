import React, { useState } from 'react';
import { SideBar } from '../../sideBar/sideBar';
import * as A from './styleMensalidade';
import * as S from '../home/styleHome';
import { Header } from '../../header/Header';
import { ImPencil2 } from 'react-icons/im';
import { useEffect } from 'react';


function Modal({ isOpen, onClose, onEdit, onDelete, onCriar, criar }) {
  const [plan, setPlanos] = useState('');
  const [price, setPreco] = useState(0);
  const [observation, setObservacao] = useState('');

  const handleEdit = () => {
    if (price < 0) {
      alert("O preço não pode ser um número negativo.");
      return;
    }

    onEdit({ plan, price, observation });
    setPlanos('');
    setPreco('');
    setObservacao('');
    onClose();
  };

  const handleCriar = () => {
    if (price < 0) {
      alert("O preço não pode ser um número negativo.");
      return;
    }

    onCriar({ plan, price, observation });
    setPlanos('');
    setPreco('');
    setObservacao('');
    onClose();
  };

  const handleDelete = () => {
    onDelete();
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
            value={plan}
            onChange={(e) => setPlanos(e.target.value)}
          />
          <label>Preço</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPreco(e.target.value)}
          />
          <label>Observação</label>
          <input
            type="text"
            value={observation}
            onChange={(e) => setObservacao(e.target.value)}
          />
        </A.ModalBody>
        <A.ModalFooter>
          <button onClick={!criar ? handleEdit : handleCriar}>Salvar</button>
          <button onClick={handleDelete}>Apagar</button>
        </A.ModalFooter>
      </A.ModalContent>
    </A.ModalOverlay>
  );
}

function Mensalidade() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [monthly, setMonthly] = useState([]);
  const [criar, setCriar] = useState(false);

  useEffect(() => {
    async function listarMensalidades() {
      setMonthly(
        await fetch('http://localhost:4040/monthlyPlan/list').then((res) =>
          res.json()
        )
      );
    }
    listarMensalidades();
  }, []);

  const handleEdit = async (data) => {
    if (data.price < 0) {
      alert("O preço não pode ser um número negativo.");
      return;
    }

    console.log(data);
    await fetch('http://localhost:4040/monthlyPlan/update/' + selectedRow, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data,
      }),
    });

    setMonthly(updatedTable);
  };

  const handleDelete = async () => {
    await fetch('http://localhost:4040/monthlyPlan/delete/' + selectedRow, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json())
      .then((res) => window.location.reload());

    setMonthly(updatedTable);
  };

  const handleCriar = async (data) => {
    if (data.price < 0) {
      alert("O preço não pode ser um número negativo.");
      return;
    }

    console.log(data);
    await fetch('http://localhost:4040/monthlyPlan/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
      }),
    }).then((res) => res.json())
      .then((res) => window.location.reload());
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
                {monthly.map((month) => (
                  <tr key={month.id}>
                    <td>{month.plan}</td>
                    <td>{month.price}</td>
                    <td className="observacao">{month.observation}</td>
                    <td className="icone">
                      <ImPencil2
                        onClick={() => {
                          setSelectedRow(month.id);
                          setIsModalOpen(true);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <A.buttonEntrar
              onClick={() => {
                setIsModalOpen(true);
                setCriar(true);
              }}
            >
              Adicionar
            </A.buttonEntrar>
          </A.containerTable>
        </A.content>
      </S.containerContent>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onEdit={!criar ? handleEdit : null}
        onCriar={criar ? handleCriar : null}
        onDelete={handleDelete}
        criar={criar}
      />
    </A.container>
  );
}

export { Mensalidade };
