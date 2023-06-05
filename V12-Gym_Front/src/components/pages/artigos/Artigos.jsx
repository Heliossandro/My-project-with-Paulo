import * as Q from './StyleArtigos';
import * as S from '../home/styleHome';
import { SideBar } from '../../sideBar/sideBar';
import { Header } from '../../header/Header';
import { BiSearchAlt2 } from 'react-icons/bi';
import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from 'react';
import axios from 'axios';

function Artigos() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [filterType, setFilterType] = useState('TUDO');

  useEffect(() => {
    // Função para buscar os dados no banco de dados
    const fetchData = async () => {
      try {
        let response;
        if (filterType === 'TUDO') {
          response = await axios.get('URL_DA_API/todos');
        } else if (filterType === 'NOVOS') {
          response = await axios.get('URL_DA_API/novos');
        } else if (filterType === 'DISPONIVEIS') {
          response = await axios.get('URL_DA_API/disponiveis');
        }
        setSearchResults(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Chama a função de busca sempre que a query de pesquisa ou o tipo de filtro mudar
    fetchData();
  }, [searchQuery, filterType]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterClick = (filter) => {
    setFilterType(filter);
  };

  return (
    <Q.container>
      <SideBar />
      <S.containerContent>
        <Header name="Artigos" />
        <Q.content>
          <Q.containerOpcoes>
            <ul>
              <li>
                <a href="#" onClick={() => handleFilterClick('TUDO')}>
                  TUDO
                </a>
              </li>
              <li>
                <a href="#" onClick={() => handleFilterClick('NOVOS')}>
                  NOVOS
                </a>
              </li>
              <li>
                <a href="#" onClick={() => handleFilterClick('DISPONIVEIS')}>
                  DISPONIVEIS
                </a>
              </li>
              <li>
                <a href="adicionarItem">ADICIONAR ITENS</a>
              </li>
            </ul>
          </Q.containerOpcoes>
          <Q.Pesquisar>
              <div className="search-bar">
                <input type="text" placeholder="Pesquisar" />
                <button type="submit"
                value={searchQuery}
                onChange={handleSearchChange}
                />
                  <FiSearch />
              </div>
            </Q.Pesquisar>
          <Q.resultados>
            {searchResults.map((produto) => (
              <Q.produto key={produto.id}>
                <img src={produto.imageUrl} alt={produto.nome} />
                <h3>{produto.nome}</h3>
                <p>{produto.preco}</p>
              </Q.produto>
            ))}
          </Q.resultados>
        </Q.content>
      </S.containerContent>
    </Q.container>
  );
}

export { Artigos };
