import * as A from './StylesCadastroGerente.jsx'
import * as S from '../login/stylesLogin'
import logo from "../../../image/logo.png"
import img from "../../../image/imgLogin.jpeg";
import { Link } from 'react-router-dom';

function CadastroGerente() {
    return(

        <A.ContainerContainer>
            <S.containerMain>
            <A.containerform>
                <A.ContainerLogo>
                    <img src={logo} alt="" />
                </A.ContainerLogo>
                <div>
                    <form action="">
                        <div>
                            <label htmlFor="nome">Nome Completo</label>
                            <input type="text" name='nomeCompleto' id='nome' required placeholder='Nome Completo'/>
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' id='email' required placeholder='Seu Email'/>
                        </div>

                        <div>
                            <label htmlFor="tel">Telefone</label>
                            <input type="number" name='telefone' id='tel' required placeholder='Nº Telefone'/>
                        </div>

                        <div>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name='password' id='senha' required placeholder='Sua Senha'/>
                        </div>

                        <div >
                            <Link to="/home">
                            <button>Criar Conta</button>
                            </Link>
                            
                        <Link to ="/">
                            <button>Voltar</button>
                        </Link>
                            
                        </div>
                    </form>
                </div>
            </A.containerform>

            <A.ConteudoDireita>
                <div>
                    <img src={img} alt="" />
                </div>
            </A.ConteudoDireita>
        </S.containerMain>
        </A.ContainerContainer>
    
    )
}

export{CadastroGerente}