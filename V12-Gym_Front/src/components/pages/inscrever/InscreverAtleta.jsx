import { SideBar } from '../../sideBar/sideBar';
import { Header } from '../../header/Header';
import * as A from './style';
import * as S from '../home/styleHome';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

function InscreverAtleta() {
  const urlCadastro = "http://localhost:4040/atleta/create"
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('O nome completo é obrigatório*')
      .test('dois-nomes', 'O nome completo deve conter pelo menos dois nomes', (value) => {
        if (!value) return false;

        const names = value.trim().split(' ');
        return names.length >= 2;
      }),
    email: Yup.string().email('Email inválido*').required('O email é obrigatório*'),
    phone_number: Yup.string().required('O número de telefone é obrigatório*').max(9, "número incorreto*").min(9, "número incorreto*"),
    nif: Yup.string().required('O NIF é obrigatório*'),
    morada: Yup.string().required('A morada é obrigatória*'),
    age: Yup.date()
      .nullable()
      .required('A age é obrigatória*')
      .test('maior-idade', 'Você deve ter mais de 13 anos', (value) => {
        if (!value) return false;
        const hoje = new Date();
        const idadeMinima = 13;
        const ageNascimento = new Date(value);
        const diffAnos = hoje.getFullYear() - ageNascimento.getFullYear();
        if (diffAnos < idadeMinima) return false;
        if (
          diffAnos === idadeMinima &&
          hoje.getMonth() < ageNascimento.getMonth()
        ) {
          return false;
        }
        if (ageNascimento > hoje) return false;
        return true;
      }),
    gender: Yup.string().required('Selecione o gender*'),
    kindOfTraining: Yup.string().oneOf(['Musculacao', 'Aerobica', 'Box', 'Kickbox'], 'Selecione um tipo de treino*').required('Selecione o tipo de treino*'),
    plan_value: Yup.string().oneOf(['10.000kz', '16.000kz', '18.000kz', '20.000kz'], 'Selecione um plano*').required('Selecione o plano*'),
    description: Yup.string().optional(),
  });

  const [error, setError] = useState(null); // Adicione o estado para lidar com erros

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone_number: '',
      nif: '',
      morada: '',
      age: null,
      gender: '',
      kindOfTraining: '',
      plan_value: '',
      description: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch(urlCadastro, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values), // Enviar os valores como JSON no corpo da requisição
        });

        if (response.ok) {
          const responseData = await response.json();
          console.log("Dados do cadastro: ", responseData);
          resetForm();
        } else {
          // Verificar erros de resposta da API
          const errorData = await response.json();
          throw new Error(errorData.message);
        }
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    },
  });

  return (
    <A.container>
      <SideBar />
      <S.containerContent>
        <Header name="Atleta" />

        <A.containerForm>
          <form onSubmit={formik.handleSubmit}>
            {/* Renderizar o erro, se houver */}
            {error && <div>{error}</div>}

            <A.line1>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Nome Completo'
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.touched.name && formik.errors.name && (
                <A.error>{formik.errors.name}</A.error>
              )}

              <input
                type="email"
                id="email"
                name="email"
                placeholder='Email'
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email && (
                <A.error>{formik.errors.email}</A.error>
              )}
            </A.line1>

            <A.line2>
              <input
                type="text"
                id="phone_number"
                name="phone_number"
                placeholder='phone_number'
                value={formik.values.phone_number}
                onChange={formik.handleChange}
              />
              {formik.touched.phone_number && formik.errors.phone_number && (
                <A.error>{formik.errors.phone_number}</A.error>
              )}

              <input
                type="text"
                id="nif"
                name="nif"
                placeholder='NIF'
                value={formik.values.nif}
                onChange={formik.handleChange}
              />
              {formik.touched.nif && formik.errors.nif && (
                <A.error>{formik.errors.nif}</A.error>
              )}
            </A.line2>

            <A.line3>
              <input
                type="text"
                id="morada"
                name="morada"
                placeholder='Morada'
                value={formik.values.morada}
                onChange={formik.handleChange}
              />
              {formik.touched.morada && formik.errors.morada && (
                <A.error>{formik.errors.morada}</A.error>
              )}

              <div>
                <input
                  type="date"
                  id="age"
                  name="age"
                  value={formik.values.age}
                  onChange={formik.handleChange}
                />
                {formik.touched.age && formik.errors.age && (
                  <A.error>{formik.errors.age}</A.error>
                )}
              </div>

              <div>
                <select
                  id="gender"
                  name="gender"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                >
                  <option value="">gender</option>
                  <option value="Masculino">M</option>
                  <option value="Feminino">F</option>
                </select>
                {formik.touched.gender && formik.errors.gender && (
                  <A.error>{formik.errors.gender}</A.error>
                )}
              </div>
            </A.line3>

            <A.form>
              <select
                id="kindOfTraining"
                name="kindOfTraining"
                value={formik.values.kindOfTraining}
                onChange={formik.handleChange}
              >
                <option value="">Plano de Treino</option>
                <option value="Musculacao">Musculação</option>
                <option value="Aerobica">Aeróbica</option>
                <option value="Box">Box</option>
                <option value="Kickbox">Kickbox</option>
              </select>
              {formik.touched.kindOfTraining && formik.errors.kindOfTraining && (
                <A.error>{formik.errors.kindOfTraining}</A.error>
              )}

              <select
                id="plan_value"
                name="plan_value"
                value={formik.values.plan_value}
                onChange={formik.handleChange}
              >
                <option value="">Preçário</option>
                <option value="10.000kz">10.000Kz</option>
                <option value="16.000kz">16.000Kz</option>
                <option value="18.000kz">18.000Kz</option>
                <option value="20.000kz">20.000Kz</option>
              </select>
              {formik.touched.plan_value && formik.errors.plan_value && (
                <A.error>{formik.errors.plan_value}</A.error>
              )}
            </A.form>

            <A.line4>
              <textarea
                id="description"
                name="description"
                placeholder='descrição'
                value={formik.values.description}
                onChange={formik.handleChange}
              />
              <button type="submit">Inscrever</button>
            </A.line4>
          </form>
        </A.containerForm>
      </S.containerContent>
    </A.container>
  );
}

export { InscreverAtleta };
