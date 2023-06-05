import { Link } from 'react-router-dom'
import logo from './../../../image/logo.png'
import imgLogin from './../../../image/imgLogin.jpeg'
import * as S from './stylesLogin'


function Login () {
    
   
   
    return(
       
       
       <S.containerContainer>
            <S.containerMain>
                <S.text>
                    <S.containerLogo>
                        <img src={logo} alt=""/>
                        <p>Bem-Vindo ao melhor Gym do Zango </p>
                    </S.containerLogo>
                        <S.containerform>

                            <form>
                               <div>
                                   <label htmlFor="nome">Email</label>
                                   <input type="email" id='email' placeholder='Insira o seu Email' required/>

                               </div>
                               <div >
                                   <label htmlFor="senha">Senha</label>
                                   <input type="password" id='senha' placeholder='Insira a sua Senha' required/>
                               </div>
                               <section>
                               <div>
                                    <S.buttonEntrar type="submit">Entrar</S.buttonEntrar>                                                
                                <Link to="/cadastroGerente"> 
                                    <S.buttonCriarConta>Criar Conta</S.buttonCriarConta>
                                </Link>
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