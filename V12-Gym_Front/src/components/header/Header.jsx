import {FaUserAlt} from "react-icons/fa"

import * as S from './StyleHeader'

function Header(props){
    return(
        <S.header>
            <div>
                <span>{props.name}</span>
            </div>
            <S.toRight>
                <div>
                    <h1>Heliossandro</h1>
                </div>
                <div>
                <FaUserAlt size={27}/>    
                </div>            
            </S.toRight>
        </S.header>
        
    )
}

export {Header}