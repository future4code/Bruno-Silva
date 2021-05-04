import React from 'react';
import './App.css';
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

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={FotoPerfil}
          nome="Bruno Silva"
          descricao="Oi, eu sou o Bruno. Sou um dos alunos da turma Paiva na Labenu e futuro Dev FullStack."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
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

      <div className="page-section-container">
        <h2>Formações Acadêmicas</h2>
        <CardGrande
          imagem={FotoLabenu}
          nome="Labenu"
          descricao="Curso de formação de Desenvolvedor Web FullStack (2021)"
        />

        <CardGrande
          imagem={FotoUfrj}
          nome="Escola de Química - UFRJ"
          descricao="Graduação em Engenharia Química (2011-)"
        />

        <CardGrande
          imagem={FotoCefet}
          nome="CEFET/RJ"
          descricao="Técnico em Eletrotécnica (2008-2010)"
        />
      </div>

      <div className="page-section-container">
        <h2>Meus contatos</h2>
        <CardPequeno
          email="teste@gmail.com"
          endereco="Rua teste - RJ"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
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
