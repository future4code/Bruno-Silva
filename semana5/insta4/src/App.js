import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
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
        />
      </MainContainer>
    );
  }
}

export default App;
