import * as S from '../home/styleHome';
import { SideBar } from '../../sideBar/sideBar';
import { Header } from '../../header/Header';
import * as Q from '../artigos/StyleArtigos';
import * as W from './styledocumentos';
import { useState } from 'react';

function Documentos() {
  const [documentos, setDocumentos] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const allowedExtensions = /(\.doc|\.docx|\.pdf)$/i; // Extensões permitidas: .doc, .docx, .pdf

    if (!allowedExtensions.exec(file.name)) {
      alert(
        'Formato de arquivo inválido. Por favor, envie apenas documentos (Word ou PDF).'
      );
      event.target.value = '';
      return;
    }

    const documento = {
      nome: file.name,
      tipo: file.type,
      tamanho: file.size,
      url: URL.createObjectURL(file), // URL do documento para abrir
    };

    // Adicionar o documento à lista de documentos
    setDocumentos([...documentos, documento]);

    // Salvar os documentos no banco de dados (localStorage)
    const documentosDoBanco = localStorage.getItem('Documentos');
    let documentosArmazenados = [];
    if (documentosDoBanco) {
      documentosArmazenados = JSON.parse(documentosDoBanco);
    }
    documentosArmazenados.push(documento);
    localStorage.setItem('Documentos', JSON.stringify(documentosArmazenados));
  };

  return (
    <Q.container>
      <SideBar />
      <S.containerContent>
        <Header name="Documentos" />
        <Q.content>
          <W.ContainerButtom>
            <input
              type="file"
              name="ficheiro"
              id="ficheiro"
              onChange={handleFileUpload}
              accept=".doc,.docx,.pdf"
            />
            <label htmlFor="ficheiro">Selecionar arquivo</label>
          </W.ContainerButtom>

          <W.StyledDocumentListItem>
          <ul>
            {documentos.map((documento, index) => (
              <li key={index}>
                <a href={documento.url} target="_blank" rel="noopener noreferrer">
                  {documento.nome}
                </a>
              </li>
            ))}
          </ul>
          </W.StyledDocumentListItem>
        </Q.content>
      </S.containerContent>
    </Q.container>
  );
}

export { Documentos };
