import * as A from './StylesCadastroGerente.jsx'
import * as S from '../login/stylesLogin'
import logo from "../../../image/logo.png"
import img from "../../../image/imgLogin.jpeg";
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function CadastroGerente() {
  const initialValues = {
    nomeCompleto: '',
    email: '',
    telefone: '',
    password: ''
  };

  const validationSchema = Yup.object({
    nomeCompleto: Yup.string()
      .required('O nome completo é obrigatório*')
      .test('dois-nomes', 'O nome completo deve conter pelo menos dois nomes', (value) => {
        if (!value) return false; 
        const names = value.trim().split(' ');
        return names.length >= 2;
      }),
    email: Yup.string().when('emailCompleto', {
      is: (value) => !!value && value.trim().length > 0,
      then: Yup.string()
        .email('Email inválido')
        .required('Campo obrigatório')
        .test('email-valido', 'Email inválido', (value) => {
          const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
          return emailRegex.test(value);
        }),
    }),
    telefone: Yup.string().required('O número de telefone é obrigatório*').max(9,"número incorreto*").min(9,"número incorreto*"),
    password: Yup.string().required('Campo obrigatório').min(6,"tem que conter 6 letras no mínimo")
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <A.ContainerContainer>
      <S.containerMain>
        <A.containerform>
          <A.ContainerLogo>
            <img src={logo} alt="" />
          </A.ContainerLogo>
          <div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div>
                  <label htmlFor="nome">Nome Completo</label>
                  <Field type="text" name='nomeCompleto' id='nome' required placeholder='Nome Completo'/>
                  <ErrorMessage name="nomeCompleto" component="div" className="error" />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <Field type="email" name='email' id='email' required placeholder='Seu Email'/>
                  <ErrorMessage name="email" component="div" className="error" />
                </div>

                <div>
                  <label htmlFor="tel">Telefone</label>
                  <Field type="text" name='telefone' id='tel' required placeholder='Nº Telefone'/>
                  <ErrorMessage name="telefone" component="div" className="error" />
                </div>

                <div>
                  <label htmlFor="senha">Senha</label>
                  <Field type="password" name='password' id='senha' required placeholder='Sua Senha'/>
                  <ErrorMessage name="password" component="div" className="error" />
                </div>

                <div >
                  <button type="submit">Criar Conta</button>
                  <Link to="/">
                    <button>Voltar</button>
                  </Link>
                </div>
              </Form>
            </Formik>
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
