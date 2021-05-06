import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: lightgreen;
    border: 1px green solid;
    border-radius: 4px;
    margin: 10px 0;
  }

  form div {
    display: flex;
    flex-direction: row;
  }

  form div div {
    padding: 10px 10px;
  }

  form button {
    width: 200px;
    margin: 10px 0;
    color: white;
    background-color: blue;
  }

  form button:hover {
    cursor: pointer;
    color: goldenrod;
    background-color: black;
  }
`

class App extends React.Component {
  state = {
    pessoas: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "eduardo",
        fotoUsuario: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
        fotoPost: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Prunella_Fitzgerald_de_Puech_Barrayre.jpg/200px-Prunella_Fitzgerald_de_Puech_Barrayre.jpg"
      },
      {
        nomeUsuario: "larissa",
        fotoUsuario: "https://img.elo7.com.br/product/zoom/2E3612B/tecido-estampado-universo-galaxia-oxford-70-cm-x-40-cm-saia-universo.jpg",
        fotoPost: "https://www.inovacaotecnologica.com.br/noticias/mini/010130210428-mini-sonda-intererstelar.jpg"
      }
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  };

  onChangeNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  }

  onChangeFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  }

  onChangeFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  }

  adicionaPost = (event) => {
    event.preventDefault()
    const novaPessoa = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    const criarPost = [...this.state.pessoas, novaPessoa];

    this.setState({ pessoas: criarPost });
  };

  render() {
    const adicionarPosts = this.state.pessoas.map((post) => {
      return (
        <Post key={post.nomeUsuario}
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });

    return (
      <MainContainer>
        <form>
          <h2><em>Crie seu novo Post</em></h2>
          <div>
            <div>
              <input
                value={this.state.valorInputNomeUsuario}
                onChange={this.onChangeNomeUsuario}
                placeholder={"Nome"}
              />
            </div>
            <div>
              <input
                value={this.state.valorInputFotoUsuario}
                onChange={this.onChangeFotoUsuario}
                placeholder={"inserir link foto de perfil"}
              />
            </div>
            <div>
              <input
                value={this.state.valorInputFotoPost}
                onChange={this.onChangeFotoPost}
                placeholder={"inserir link imagem do post"}
              />
            </div>
          </div>
          <button onClick={this.adicionaPost} >Adicionar Novo Post</button>
        </form>
        <div>{adicionarPosts}</div>
        {/* <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'eduardo'}
          fotoUsuario={'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg'}
          fotoPost={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Prunella_Fitzgerald_de_Puech_Barrayre.jpg/200px-Prunella_Fitzgerald_de_Puech_Barrayre.jpg'}
        />
        <Post
          nomeUsuario={'larissa'}
          fotoUsuario={'https://img.elo7.com.br/product/zoom/2E3612B/tecido-estampado-universo-galaxia-oxford-70-cm-x-40-cm-saia-universo.jpg'}
          fotoPost={'https://www.inovacaotecnologica.com.br/noticias/mini/010130210428-mini-sonda-intererstelar.jpg'}
        /> */}
      </MainContainer>
    );
  }
}

export default App;
