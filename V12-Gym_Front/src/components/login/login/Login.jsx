import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom'
import logo from './../../../image/logo.png'
import imgLogin from './../../../image/imgLogin.jpeg'
import * as S from './stylesLogin'
import * as yup from 'yup'
import { useFormik } from 'formik'


function Login () {

    const urlLogin = "http://localhost:4040/auth/login"
    const navigate = useNavigate()
     
   const formik = useFormik({
    initialValues: {
        email: "",
        password: "",
    },

    validationSchema: yup.object({
        email: yup.string().required(),
        password: yup.string().required(),
    }), 

    onSubmit: async (data, {resetForm}) => {
        try{
            const response = await fetch(urlLogin, {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            if (response.ok) {
                const responseData = await response.json()
      
                toast.success('Bem vindo');
                console.log("Dados do cadastro: ", responseData);
              } else {
                toast.error('Senha ou email errado, tente novamente.'); 
                resetForm();
              }
              resetForm({
                values: {
                  email: '',
                  password: ''
                }
              })
              navigate('/home')
            }
              catch (error) {
                console.log(error);
                toast.error('Senha ou email errado, tente novamente.'); 
        }
    }

   })
    return(
       
       
       <S.containerContainer>
            <S.containerMain>
                <S.text>
                    <S.containerLogo>
                        <img src={logo} alt=""/>
                        <p>Bem-Vindo ao melhor Gym do Zango </p>
                    </S.containerLogo>
                        <S.containerform>

                            <form onSubmit={formik.handleSubmit}>
                               <div>
                                   <label htmlFor="nome">Email</label>
                                   <input type="email" id='email' name='email' placeholder='Insira o seu Email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                               </div>
                               <div >
                                   <label htmlFor="senha">Senha</label>
                                   <input type="password" id='senha' name='password' placeholder='Insira a sua Senha'  onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
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