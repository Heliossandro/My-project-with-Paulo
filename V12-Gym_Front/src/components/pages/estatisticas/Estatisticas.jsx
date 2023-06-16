import React, { useState, useEffect } from 'react';
import { SideBar } from '../../sideBar/sideBar';
import { Header } from '../../header/Header';
import * as S from '../estatisticas/Style';

function Estatisticas() {
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  const [soldArticlesCount, setSoldArticlesCount] = useState(0);
  const [availableArticlesCount, setAvailableArticlesCount] = useState(0);
  const [trainingTypesCount, setTrainingTypesCount] = useState({});
  const [trainingPlansCount, setTrainingPlansCount] = useState({});
  const [paymentsCount, setPaymentsCount] = useState(0);
  const [registeredAthletesCount, setRegisteredAthletesCount] = useState(0);
  const [droppedAthletesCount, setDroppedAthletesCount] = useState(0);

  useEffect(() => {
    // Simulação de chamadas assíncronas para obter os dados das estatísticas
    // Substitua com suas chamadas reais à API ou acesso a dados

    // Quantidade de homens e mulheres
    setMaleCount(50);
    setFemaleCount(30);

    // Quantidade de artigos vendidos e disponíveis
    setSoldArticlesCount(100);
    setAvailableArticlesCount(50);

    // Quantidade de atletas em cada tipo de treino
    setTrainingTypesCount({
      type1: 20,
      type2: 30,
      type3: 10,
    });

    // Quantidade de atletas em cada plano de treino
    setTrainingPlansCount({
      plan1: 40,
      plan2: 25,
      plan3: 15,
    });

    // Quantidade de pagamentos no mês
    setPaymentsCount(80);

    // Quantidade de atletas inscritos e desistentes
    setRegisteredAthletesCount(200);
    setDroppedAthletesCount(50);
  }, []);

  return (
    <S.Container>
      <SideBar />
      <S.Content>
        <Header name="Estatísticas" />
       <form >
       <S.Card></S.Card>

            <S.Statistic>
            <h3>Quantidade de Homens e Mulheres</h3>
            <div>
                <p>Homens: {maleCount}</p>
                <p>Mulheres: {femaleCount}</p>
            </div>
            </S.Statistic>

            <S.Statistic>
            <h3>Quantidade de Artigos Vendidos e Disponíveis</h3>
            <div>
                <p>Artigos Vendidos: {soldArticlesCount}</p>
                <p>Artigos Disponíveis: {availableArticlesCount}</p>
            </div>
            </S.Statistic>

            <S.Statistic>
            <h3>Quantidade de Atletas em Cada Tipo de Treino</h3>
            <div>
                {Object.entries(trainingTypesCount).map(([type, count]) => (
                <p key={type}>
                    {type}: {count}
                </p>
                ))}
            </div>
            </S.Statistic>

            <S.Statistic>
            <h3>Quantidade de Atletas em Cada Plano de Treino</h3>
            <div>
                {Object.entries(trainingPlansCount).map(([plan, count]) => (
                <p key={plan}>
                    {plan}: {count}
                </p>
                ))}
            </div>
            </S.Statistic>

            <S.Statistic>
            <h3>Quantidade de Pagamentos no Mês</h3>
            <div>
                <p>{paymentsCount}</p>
            </div>
            </S.Statistic>

            <S.Statistic>
            <h3>Quantidade de Atletas Inscritos e Desistentes</h3>
            <div>
                <p>Inscritos: {registeredAthletesCount}</p>
                <p>Desistentes: {droppedAthletesCount}</p>
            </div>
            </S.Statistic>
        </form> 
      </S.Content>
    </S.Container>
  );
}

export { Estatisticas };
