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
        await axios.post('', values);

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
          

          <form>
            <A.line1>
             
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Nome Completo'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                onBlur={formik.handleBlur}
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
                onBlur={formik.handleBlur}
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
                onBlur={formik.handleBlur}
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
                onBlur={formik.handleBlur}
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
                onBlur={formik.handleBlur}
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
                onBlur={formik.handleBlur}
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
                onBlur={formik.handleBlur}
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
                id="precario"
                name="precario"
                value={formik.values.precario}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                >
                <option value="">Precario</option>
                <option value="10.000kz">10.000Kz</option>
                <option value="16.000kz">16.000Kz</option>
                <option value="18.000kz">18.000Kz</option>
                <option value="20.000kz">20.000Kz</option>
              </select>
              {formik.touched.precario && formik.errors.precario && (
                  <A.error>{formik.errors.precario}</A.error>
                  )}
                </A.form>
            <A.line4>

                

            
              <textarea
                id="description"
                name="description"
                placeholder='descriptionrição'
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                /> 
            
            <button type="submit">Inscrever</button>
                </A.line4>

          </form>
        </A.containerForm>
      </S.containerContent>
    </A.container>
  );
}

export {InscreverAtleta};
