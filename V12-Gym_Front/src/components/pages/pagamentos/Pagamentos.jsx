import { SideBar } from '../../sideBar/sideBar'
import { Header } from '../../header/Header'
import { Input } from '../../inputs/Input'
import * as A from './stylePagamentos'
import * as S from '../home/styleHome'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Pagamentos() {

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Campo obrigatório'),
    quantidade: Yup.number().required('Campo obrigatório').positive('Deve ser um número positivo'),
    finalidade: Yup.string().required('Campo obrigatório'),
  });

  const initialValues = {
    name: '',
    quantidade: '',
    finalidade: '',
  };

  const handleSubmit = async (values) => {
    try {
      
      const response = await axios.post('http://localhost:4040/pagamento/create', values);
      console.log(response.data); 
      
    
    history.push('/documentos'); 
    } catch (error) {
      console.error(error);
    }
  };

  const [nomesExistentes, setNomesExistentes] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:4040/atleta/list')
      .then(response => {
        setNomesExistentes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <A.container>
      <SideBar />
      <S.containerContent>
        <Header name="Pagamentos" />
        <A.content>
          <A.containerForm>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <A.line1>
                    <Field
                        as="select"
                        id="name"
                        name="name"
                        placeholder="Nome do atleta"
                    >
                        <option value="">Selecione um nome</option>
                        {nomesExistentes.map((nome) => (
                        <option key={nome.id} value={nome.name}>
                            {nome.name}
                        </option>
                        ))}
                    </Field>
                    <ErrorMessage name="name" component="div" className="error" />
                </A.line1>

                <A.line2>
                  <Field type="number" id="quantidade" name="quantidade" placeholder="Quantidade" />
                  <ErrorMessage name="quantidade" component="div" className="error" />
                </A.line2>

                <A.line4>
                  <Field as="textarea" id="finalidade" name="finalidade" placeholder="Finalidade" />
                  <ErrorMessage name="finalidade" component="div" className="error" />
                  <div><button type="submit">Pagar</button></div>
                </A.line4>
              </Form>
            </Formik>
          </A.containerForm>
        </A.content>
      </S.containerContent>
    </A.container>
  );
}

export { Pagamentos };
