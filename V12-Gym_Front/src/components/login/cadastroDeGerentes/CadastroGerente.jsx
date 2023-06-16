import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as A from './StylesCadastroGerente.jsx';
import * as S from '../login/stylesLogin';
import logo from "../../../image/logo.png";
import img from "../../../image/imgLogin.jpeg";
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';

function CadastroGerente() {
  const urlCadastro = "http://localhost:4040/manager/create"

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      password: ''
    },
    
    validationSchema: yup.object({
      name: yup.string()
        .required('O nome completo é obrigatório*')
        .test('dois-nomes', 'O nome completo deve conter pelo menos dois nomes', (value) => {
          if (!value) return false;
          const names = value.trim().split(' ');
          return names.length >= 2;
        }),
      email: yup.string().required("Campo obrigatório").email("Email inválido"),
      phoneNumber: yup.string().required("Campo obrigatório").min(9, "Digite um número válido").max(9, "Digite um número válido"),
      password: yup.string().required("Campo obrigatório").min(6, "Digite um número válido"),
    }),
    onSubmit: async (data, {resetForm}) => {
      console.log(JSON.stringify(data));
      try {
        const response = await fetch(urlCadastro, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })

        if (response.ok) {
          const responseData = await response.json()

          toast.success('Cadastro feito com sucesso!'); 
          console.log("Dados do cadastro: ", responseData);
        } else {
          toast.error('Falha no cadastro. Por favor, tente novamente.');
          resetForm();
        }
        resetForm({
          values: {
            name: '',
            email: '',
            phoneNumber: '',
            password: ''
          }
        })
      }
      catch (error) {
        console.log(error);
        toast.error('Ocorreu um erro. Por favor, tente novamente.'); 
      }
    }

  })

  return (
    <A.ContainerContainer>
      <S.containerMain>
        <A.containerform>
          <A.ContainerLogo>
            <img src={logo} alt="" />
          </A.ContainerLogo>
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="nome">Nome Completo</label>
                <input type="text" name='name' id='nome' placeholder='Nome Completo' onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />

                <div>
                  {formik.touched.name && formik.errors.name ? (
                    <span>{formik.errors.name}</span>
                  ) : null}
                </div>
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email' placeholder='Seu Email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                <div>
                  {formik.touched.email && formik.errors.email ? (
                    <span>{formik.errors.email}</span>
                  ) : null}
                </div>
              </div>

              <div>
                <label htmlFor="tel">Telefone</label>
                <input type="text" name='phoneNumber' id='tel' placeholder='Nº de telefone' onChange={formik.handleChange} value={formik.values.phoneNumber} onBlur={formik.handleBlur} />
                <div>
                  {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <span>{formik.errors.phoneNumber}</span>
                  ) : null}
                </div>
              </div>

              <div>
                <label htmlFor="senha">Senha</label>
                <input type="password" name='password' id='senha' placeholder='Sua Senha' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
                <div>
                  {formik.touched.password && formik.errors.password ? (
                    <span>{formik.errors.password}</span>
                  ) : null}
                </div>
              </div>

              <A.containerButton >
                <button type="submit">Criar Conta</button>
                <Link to="/">
                  Voltar
                </Link>
              </A.containerButton>
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
  );
}

export { CadastroGerente };
