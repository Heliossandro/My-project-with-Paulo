import { useEffect, useState } from 'react';

import { BiSearchAlt } from 'react-icons/bi';
import * as S from './styleHeader';

function Header(props) {
  const [gerente, setGerente] = useState('');

  useEffect(() => {
    const fetchGerente = async () => {
      try {
        const response = await fetch('http://localhost:4040/manager/get'); 
        const data = await response.json();
        setGerente(data.name); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchGerente();
  }, []);

  return (
    <>
      <S.Header>
    
        <S.RightSide>
          <S.Search>
         <input type="Search" placeholder='pesquisar...'/>
         <BiSearchAlt size={24}/>
          </S.Search>
        </S.RightSide>
      </S.Header>
    </>
  );
}

export { Header };
