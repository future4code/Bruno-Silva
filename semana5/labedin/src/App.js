import React from 'react';
// import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import FotoPerfil from './img/foto.jpg';
import FotoPetro from './img/petrobras-logo.png';
import FotoSandech from './img/sandech-logo.png';
import FotoChemtech from './img/chemtech-logo.png';
import FotoLabenu from './img/Labenu-logo.png';
import FotoUfrj from './img/ufrj-logo.png';
import FotoCefet from './img/cefet-logo.png';
import IconeEmail from './img/email.png';
import IconeEndereco from './img/endereco.png';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.App {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

.page-section-container {
  border: 1px solid black;
  width: 40vw;
  margin: 10px 0;
}

.page-section-container > h3 {
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin: 10px 0;
}
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h2>Dados pessoais</h2>
      <div className="page-section-container">

        <CardGrande
          imagem={FotoPerfil}
          nome="Bruno Silva"
          descricao="Oi, eu sou o Bruno. Sou um dos alunos da turma Paiva na Labenu e futuro Dev FullStack."
        />
      </div>
      <ImagemButton
        imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
        texto="Ver mais"
      />

      <div className="page-section-container">
        <CardPequeno
          imagem={IconeEmail}
          texto="teste@gmail.com"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={IconeEndereco}
          texto="Rua teste - RJ"
        />
      </div>

      <h2>Experiências profissionais</h2>
      <div className="page-section-container">
        <CardGrande
          imagem={FotoPetro}
          nome="Petrobras"
          descricao="Atuei como Técnico de Operação Industrial ao longo de 3 anos, na refinaria REDUC-RJ. Lá, era responsável por 3 plantas industriais: uma Unidade de Reforma Catalítica, uma Unidade Tratamento Bender e uma Unidade de Tratamento de GLP."
        />

        <CardGrande
          imagem={FotoSandech}
          nome="Sandech"
          descricao="Atuei como Estagiário de Operações ao longo de 3 meses. Participei de projeto de levantamento de dados, instrumentos e equipamentos para os sistemas de plataformas. "
        />

        <CardGrande
          imagem={FotoChemtech}
          nome="Chemtech"
          descricao=" Atuei durante 11 meses como Estagiário Desenhista Cadista. Participei na execução de projetos descritivos de distribuição de iluminação, de força, diagramas 
          trifilares, fluxogramas elétricos em plantas industriais em construção, ou em renovação."
        />
      </div>

      <h2>Formações Acadêmicas</h2>
      <div className="page-section-container">
        <CardGrande
          imagem={FotoLabenu}
          nome="Labenu"
          descricao="Curso de formação de Desenvolvedor Web FullStack (2021)"
        />

        <CardGrande
          imagem={FotoUfrj}
          nome="Escola de Química - UFRJ"
          descricao="Graduação em Engenharia Química (2011-atual)"
        />

        <CardGrande
          imagem={FotoCefet}
          nome="CEFET/RJ"
          descricao="Técnico em Eletrotécnica (2008-2010)"
        />
      </div>

      <h2>Minhas redes sociais</h2>
      <div className="page-section-container2"> 
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
