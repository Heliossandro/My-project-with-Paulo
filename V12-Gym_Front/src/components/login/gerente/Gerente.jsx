import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './StylesPerfilGerente';

function Gerente({ eliminarPerfil }) {
  const [gerente, setGerente] = useState(null);

  useEffect(() => {
    const fetchGerente = async () => {
      try {
        const response = await axios.get('http://localhost:4040/manager/list');
        setGerente(response.data);
      } catch (error) {
        console.error('Erro ao buscar perfil do gerente:', error);
      }
    };

    fetchGerente();
  }, []);

  if (!gerente) {
    return <div>Carregando...</div>;
  }

  return (
    <S.Container>
      <h2>Perfil do Gerente</h2>
      <S.InfoContainer>
        <S.DadosContainer>
          <S.Dado>
            <strong>Nome Completo:</strong> {gerente.name}
          </S.Dado>
          <S.Dado>
            <strong>Email:</strong> {gerente.email}
          </S.Dado>
          <S.Dado>
            <strong>Telefone:</strong> {gerente.phoneNumber}
          </S.Dado>
        </S.DadosContainer>
        <S.BotaoEliminar onClick={eliminarPerfil}>
          Eliminar Perfil
        </S.BotaoEliminar>
      </S.InfoContainer>
    </S.Container>
  );
}

export { Gerente };
