import { SideBar } from '../../sideBar/sideBar';
import { Header } from '../../header/Header';
import { useState } from 'react';
import * as A from './stylePlano';
import * as S from '../home/styleHome';

const dataTable = [
  {
    DiaSemana: 'Segunda-Feira',
    Plano: 'Plano',
  },
  {
    DiaSemana: 'Terça-Feira',
    Plano: 'Plano',
  },
  {
    DiaSemana: 'Quarta-Feira',
    Plano: 'Plano',
  },
  {
    DiaSemana: 'Quinta-Feira',
    Plano: 'Plano',
  },
  {
    DiaSemana: 'Sexta-Feira',
    Plano: 'Plano',
  },
  {
    DiaSemana: 'Sábado',
    Plano: 'Plano',
  },
];

function Plano() {
  const [selectedDiaSemana, setSelectedDiaSemana] = useState('');
  const [planos, setPlanos] = useState([]);

  const handleAbrirClick = (diaSemana) => {
    // Buscar os planos do banco de dados local para o dia selecionado
    const planosDoBanco = localStorage.getItem('Planos');
    if (planosDoBanco) {
      const planosPorDia = JSON.parse(planosDoBanco).filter(
        (plano) => plano.DiaSemana === diaSemana
      );
      setPlanos(planosPorDia);
    }
    setSelectedDiaSemana(diaSemana);
  };

  return (
    <A.container>
      <SideBar />
      <S.containerContent>
        <Header name="Planos de Treino" />

        <A.content>
          <A.containerTable>
            <table>
              <thead>
                <tr>
                  <th>Dias da Semana</th>
                  <th className="plano">Planos</th>
                  <th className="utilizacao">Utilização</th>
                </tr>
              </thead>
              <tbody>
                {dataTable.map((td, index) => (
                  <tr key={index}>
                    <td>{td.DiaSemana}</td>
                    <td className="utilizacao">{td.Plano}</td>
                    <td>
                      <div className="btn">
                        <A.btn1 href="#" onClick={() => handleAbrirClick(td.DiaSemana)}>
                          Abrir
                        </A.btn1>
                        <A.btn2 href="CriacaoDePlano">Novo</A.btn2>
                      </div>
                    </td>
                  </tr>
                ))}
                {selectedDiaSemana && (
                  <tr>
                    <td colSpan="3">
                      <ul>
                        {planos.map((plano, index) => (
                          <li key={index}>{plano.Plano}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </A.containerTable>
        </A.content>
      </S.containerContent>
    </A.container>
  );
}

export { Plano };
