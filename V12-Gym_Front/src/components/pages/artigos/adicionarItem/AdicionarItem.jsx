import { SideBar } from '../../../sideBar/sideBar'
import { Header } from '../../../header/Header'
import * as A from './StyleAdicionarItem'
import * as S from '../../home/styleHome'
import { useState } from 'react'
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

function AdicionarItem() {
  const validationSchema = Yup.object().shape({
    Produto: Yup.string().required('O nome é obrigatório*'),
    Preco: Yup.string().required('O número de Preço é obrigatório*'),
    ImageUrl: Yup.mixed()
    .required('Selecione uma imagem*')
    .test('is-image', 'Apenas imagens são permitidas', (value) => {
      if (!value) return false;
      const supportedFormats = ['image/jpeg', 'image/png'];
      return supportedFormats.includes(value.type);
    }),
    Quantidade: Yup.string().required('Quantidade obrigatória*'),
    desc: Yup.string().optional(),
  });

  const [produtos, setProdutos] = useState([]);

  const formik = useFormik({
    initialValues:{
      Produto: '',
      Preco: '',
      ImageUrl: null,
      Quantidade: '',
      desc: '',
    },
    validationSchema,
    onSubmit: (values, {resetForm}) => {
       // Adicionar o novo produto aos produtos existentes
      const novoProduto = { ...values, id: Date.now() };
      const novosProdutos = [...produtos, novoProduto];
      setProdutos(novosProdutos);
       // Salvar os produtos no localStorage
      localStorage.setItem('produtos', JSON.stringify(novosProdutos));
      resetForm();
    },
  });

  const handleImageChange = (event) => {
    formik.setFieldValue("ImageUrl", event.currentTarget.files[0]);
  };

  return (
    <A.container>
      <SideBar />
      <S.containerContent>
        <Header name="Artigos" />

        <A.content>
          <A.containerForm>
            <form onSubmit={formik.handleSubmit}>
              <A.line1>
                <input
                  type="text"
                  name='Produto'
                  placeholder='Nome do Produto'
                  onChange={formik.handleChange}
                  value={formik.values.Produto}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.Produto && formik.touched.Produto && (
                  <span>{formik.errors.Produto}</span>
                )}
                
                <input
                  type="number"
                  name='Preco'
                  placeholder='Preço'
                  id='Preco'
                  onChange={formik.handleChange}
                  value={formik.values.Preco}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.Preco && formik.touched.Preco && (
                  <span>{formik.errors.Preco}</span>
                )}
                
                <input
                  type="number"
                  name='Quantidade'
                  placeholder='Quantidade'
                  id='Quantidade'
                  onChange={formik.handleChange}
                  value={formik.values.Quantidade}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.Quantidade && formik.touched.Quantidade && (
                  <span>{formik.errors.Quantidade}</span>
                )}
      
               
              </A.line1>

              <A.line4>
                <textarea
                  name="desc"
                  id="desc"
                  cols="30"
                  rows="10"
                  placeholder='Descrição'
                  onChange={formik.handleChange}
                  value={formik.values.desc}
                ></textarea>
                <div className='butoes'>
                <label htmlFor="ImageUrl">Selecionar imagem</label>
                <input 
                  className='ficheiro'
                  id='ImageUrl'
                  type="file"
                  name="ImageUrl"
                  onChange={handleImageChange}
                  onBlur={formik.handleBlur}
                  accept=".jpeg,.png"
                />
                {formik.errors.ImageUrl && formik.touched.ImageUrl && (
                  <span>{formik.errors.ImageUrl}</span>
                )}
                  <button type="submit"> Adicionar </button>{" "}
                </div>
              </A.line4>
            </form>
          </A.containerForm>
        </A.content>
      </S.containerContent>
    </A.container>
  );
}

export { AdicionarItem };
