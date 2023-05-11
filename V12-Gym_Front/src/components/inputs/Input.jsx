import * as S from './styleInput'

function Input( { type, id, name, placeholder, max, min, req } ) {
    return(
        <S.input type={type} id={id} name={name} placeholder={placeholder} maxLength={max} minLength={min} required={req}/>
    )
}

export { Input }