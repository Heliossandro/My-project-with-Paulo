
import { IoPersonSharp } from 'react-icons/io5'

import * as S from './styleHeader'
import { useState } from 'react'

function Header(props) {

    return(
        <>
            <S.header>
                <div className='text'>
                    <span>{props.name}</span>
                </div>
                <S.toRight>
                    <a href="gerente">
                    <div>
                        <h1>Heliossando Afonso</h1>
                    </div>
                    <div className='icon'>
                        <IoPersonSharp size={27}/>
                    </div>
                    </a>
                </S.toRight>
            </S.header>
        </>
    )
}

export{ Header }

