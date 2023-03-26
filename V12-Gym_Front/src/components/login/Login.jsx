import logo from './../../image/logo.png'
import imgLogin from './../../image/imgLogin.jpeg'

import * as S from './stylesLogin'


function Login(){
    return(
       
       
       <S.containerContainer>
            <S.containerMain>
                <S.text>
                    <S.containerLogo>
                        <img src={logo} alt=""/>
                        <p>Bem-Vindo ao melhor Gym do Zango </p>
                    </S.containerLogo>
                        <S.containerform>
                            <form action="">
                               <div>
                                   <label htmlFor="nome">Email</label>
                                   <input type="email" id='nome' placeholder='Insira o seu Email' required/>
                               </div>
                               <div>
                                   <label htmlFor="senha">Senha</label>
                                   <input type="password" id='senha' placeholder='Insira a sua Senha' required/>
                               </div>
                               <section>
                                   <div>
                                        <S.buttonEntrar>Entrar</S.buttonEntrar>
                                        <S.buttonCriarConta>Criar Conta</S.buttonCriarConta>
                                   </div>
                                    <div> 
                                        <a href="">Esqueceu a senha?</a> 
                                    </div>
                               </section>
                            </form>
                        </S.containerform>
                </S.text>
                <S.containerImage>
                    <img src={imgLogin} alt="" />
                </S.containerImage>
            </S.containerMain>

        </S.containerContainer>
       
    )
}

export { Login }