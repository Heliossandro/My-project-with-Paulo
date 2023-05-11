import { IoPersonSharp } from 'react-icons/io5'

import * as S from './styleHeader'

function Header(props) {
    return(
        <S.header>
            <div>
                <span>{props.name}</span>
            </div>
            <S.toRight>
                <a href="">
                <div>
                    <h1>Heliossando Afonso</h1>
                </div>
                <div className='icon'>
                    <IoPersonSharp size={27}/>
                </div>
                </a>
                
            </S.toRight>
        </S.header>
    )
}

export{ Header }