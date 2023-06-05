import { SideBar } from '../../sideBar/sideBar';
import { Header } from '../../header/Header';
import * as A from './style';
import * as S from '../home/styleHome';
import { useState } from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function InscreverAtleta() {
  const validationSchema = Yup.object().shape({
    nomeCompleto: Yup.string()
      .required('O nome completo é obrigatório*')
      .test('dois-nomes', 'O nome completo deve conter pelo menos dois nomes', (value) => {
        if (!value) return false;

        const names = value.trim().split(' ');
        return names.length >= 2;
      }),
    email: Yup.string().email('Email inválido*').required('O email é obrigatório*'),
    telefone: Yup.string().required('O número de telefone é obrigatório*').max(9, "número incorreto*").min(9, "número incorreto*"),
    nif: Yup.string().required('O NIF é obrigatório*'),
    morada: Yup.string().required('A morada é obrigatória*'),
    data: Yup.date()
      .nullable()
      .required('A data é obrigatória*')
      .test('maior-idade', 'Você deve ter mais de 13 anos', (value) => {
        if (!value) return false;

        const hoje = new Date();
        const idadeMinima = 13;

        const dataNascimento = new Date(value);
        const diffAnos = hoje.getFullYear() - dataNascimento.getFullYear();

        if (diffAnos < idadeMinima) return false;
        if (
          diffAnos === idadeMinima &&
          hoje.getMonth() < dataNascimento.getMonth()
        ) {
          return false;
        }
        if (dataNascimento > hoje) return false;
        return true;
      }),
    sexo: Yup.string().required('Selecione o sexo*'),
    tipoDetreino: Yup.string().oneOf(['Musculacao', 'Aerobica', 'Box', 'Kickbox'], 'Selecione um tipo de treino*').required('Selecione o tipo de treino*'),
    precario: Yup.string().oneOf(['10.000kz', '16.000kz', '18.000kz', '20.000kz'], 'Selecione um plano*').required('Selecione o plano*'),
    desc: Yup.string().optional(),
  });

  const formik = useFormik({
    initialValues: {
      nomeCompleto: '',
      email: '',
      telefone: '',
      nif: '',
      morada: '',
      data: null,
      sexo: '',
      tipoDetreino: '',
      precario: '',
      desc: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post('http://localhost:5432/v12GymBD', values);

        alert('Atleta inserido com sucesso!');

        resetForm();
      } catch (error) {
        console.error(error);

        alert('Ocorreu um erro ao inserir o atleta. Por favor, tente novamente.');
      }
    },
  });

  return (
    <A.container>
      <SideBar />
      <S.containerContent>
        <Header name="Atleta" />

        <A.containerForm>
          

          <A.form onSubmit={formik.handleSubmit}>
            <div>
              <label>Nome Completo*</label>
              <input
                type="text"
                id="nomeCompleto"
                name="nomeCompleto"
                value={formik.values.nomeCompleto}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.nomeCompleto && formik.errors.nomeCompleto && (
                <A.error>{formik.errors.nomeCompleto}</A.error>
              )}
            </div>

            <div>
              <label>Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <A.error>{formik.errors.email}</A.error>
              )}
            </div>

            <div>
              <label>Número de Telefone*</label>
              <input
                type="text"
                id="telefone"
                name="telefone"
                value={formik.values.telefone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.telefone && formik.errors.telefone && (
                <A.error>{formik.errors.telefone}</A.error>
              )}
            </div>

            <div>
              <label>NIF*</label>
              <input
                type="text"
                id="nif"
                name="nif"
                value={formik.values.nif}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.nif && formik.errors.nif && (
                <A.error>{formik.errors.nif}</A.error>
              )}
            </div>

            <div>
              <label>Morada*</label>
              <input
                type="text"
                id="morada"
                name="morada"
                value={formik.values.morada}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.morada && formik.errors.morada && (
                <A.error>{formik.errors.morada}</A.error>
              )}
            </div>

            <div>
              <label>Data de Nascimento*</label>
              <input
                type="date"
                id="data"
                name="data"
                value={formik.values.data}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.data && formik.errors.data && (
                <A.error>{formik.errors.data}</A.error>
              )}
            </div>

            <div>
              <label>Sexo*</label>
              <select
                id="sexo"
                name="sexo"
                value={formik.values.sexo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Selecione</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </select>
              {formik.touched.sexo && formik.errors.sexo && (
                <A.error>{formik.errors.sexo}</A.error>
              )}
            </div>

            <div>
              <label>Tipo de Treino*</label>
              <select
                id="tipoDetreino"
                name="tipoDetreino"
                value={formik.values.tipoDetreino}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Selecione</option>
                <option value="Musculacao">Musculação</option>
                <option value="Aerobica">Aeróbica</option>
                <option value="Box">Box</option>
                <option value="Kickbox">Kickbox</option>
              </select>
              {formik.touched.tipoDetreino && formik.errors.tipoDetreino && (
                <A.error>{formik.errors.tipoDetreino}</A.error>
              )}
            </div>

            <div>
              <label>Plano*</label>
              <select
                id="precario"
                name="precario"
                value={formik.values.precario}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Selecione</option>
                <option value="10.000kz">10.000Kz</option>
                <option value="16.000kz">16.000Kz</option>
                <option value="18.000kz">18.000Kz</option>
                <option value="20.000kz">20.000Kz</option>
              </select>
              {formik.touched.precario && formik.errors.precario && (
                <A.error>{formik.errors.precario}</A.error>
              )}
            </div>

            <div>
              <label>Descrição</label>
              <textarea
                id="desc"
                name="desc"
                value={formik.values.desc}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              /> 
            </div>

            <A.button type="submit">Inscrever</A.button>
          </A.form>
        </A.containerForm>
      </S.containerContent>
    </A.container>
  );
}

export {InscreverAtleta};

