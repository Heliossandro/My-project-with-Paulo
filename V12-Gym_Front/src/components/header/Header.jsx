import { IoPersonSharp } from "react-icons/io5";

import * as S from "./styleHeader";

function Header(props) {
  return (
    <>
      <S.header>
        <div className="text">
          <span>{props.name}</span>
        </div>
        <S.toRight>
          <a href="gerente">
            <div>
              <h1>HELIOSSANDO AFONSO</h1>
            </div>
            <div className="icon">
              <IoPersonSharp size={26} />
            </div>
          </a>
        </S.toRight>
      </S.header>
    </>
  );
}

export { Header };
