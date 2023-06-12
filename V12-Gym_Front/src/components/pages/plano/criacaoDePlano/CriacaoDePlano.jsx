import { SideBar } from '../../../sideBar/sideBar'
import { Header } from '../../../header/Header'
import * as A from '../../artigos/adicionarItem/StyleAdicionarItem'
import * as S from '../../home/styleHome'
import { useState } from 'react'
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';


function  CriacaoDePlano (){

    const validationSchema = Yup.object().shape({
        Plano: Yup.string().required('O nome é obrigatório*'),  
        Desc: Yup.string().required('Descrição é obrigatório*'),
      });

      const [Planos, setPlanos] = useState([]);

  const formik = useFormik({
    initialValues:{
      Plano: '',
      Desc: '',
    },
    validationSchema,
    onSubmit: (values, {resetForm}) => {
       // Adicionar o novo Plano aos Planos existentes
      const novoPlano = { ...values, id: Date.now() };
      const novosPlanos = [...Planos, novoPlano];
      setPlanos(novosPlanos);
       // Salvar os Planos no localStorage
      localStorage.setItem('Planos', JSON.stringify(novosPlanos));
      resetForm();
    },
  });

 

  return (
    <A.container>
      <SideBar />
      <S.containerContent>
        <Header name="plano" />

        <A.content>
          <A.containerForm>
            <form onSubmit={formik.handleSubmit}>
              <A.line1>
                <input
                  type="text"
                  name='Plano'
                  placeholder='Nome do Plano'
                  onChange={formik.handleChange}
                  value={formik.values.Plano}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.Plano && formik.touched.Plano && (
                  <span>{formik.errors.Plano}</span>
                )}
                   
              </A.line1>

              <A.line4>
                <textarea
                  name="Desc"
                  id="desc"
                  cols="30"
                  rows="10"
                  placeholder='Descrição'
                  onChange={formik.handleChange}
                  value={formik.values.Desc}
                  onBlur={formik.handleBlur}
                ></textarea>
                 {formik.errors.Desc && formik.touched.Desc && (
                  <span>{formik.errors.Desc}</span>
                )}
                
                  <button type="submit"> Criar Plano </button>{" "}
                
              </A.line4>
            </form>
          </A.containerForm>
        </A.content>
      </S.containerContent>
    </A.container>
  )

}
export {CriacaoDePlano}