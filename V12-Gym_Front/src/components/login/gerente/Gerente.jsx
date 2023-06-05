import React from 'react';
import * as S from './StylesPerfilGerente';

function Gerente({ gerente, eliminarPerfil }) {
  return (
    <S.Container>
      <h2>Perfil do Gerente</h2>
      <S.InfoContainer>
        <S.DadosContainer>
          <S.Dado>
            <strong>Nome Completo:</strong> {gerente.nomeCompleto}
          </S.Dado>
          <S.Dado>
            <strong>Email:</strong> {gerente.email}
          </S.Dado>
          <S.Dado>
            <strong>Telefone:</strong> {gerente.telefone}
          </S.Dado>
        </S.DadosContainer>
        <S.BotaoEliminar onClick={eliminarPerfil}>
          Eliminar Perfil
        </S.BotaoEliminar>
      </S.InfoContainer>
    </S.Container>
  );
}

export {Gerente};