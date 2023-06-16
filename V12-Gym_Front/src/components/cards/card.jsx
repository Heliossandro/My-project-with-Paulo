import { IoPeople } from "react-icons/io5";
import * as S from "./styles"

function Cards() {
  return (
    <S.Container>
        <IoPeople size={24}/> 
        <span>People</span>
    </S.Container>
  );
}

export { Cards };
