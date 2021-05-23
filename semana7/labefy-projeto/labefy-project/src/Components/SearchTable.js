import React from 'react';
import styled from 'styled-components';
// import axios from 'axios';
import catAlice from '../img/cat-alice.jpg';
import addIcon from '../img/add-icon.svg';

const UserContainer = styled.div`
    position: absolute;
    top: 16px;
    left: 16px;

    > div {
        width: 280px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    div div {
        font-size: 28px;
    }
`

const UserPhoto = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid darkgrey;
`

const Botao = styled.button`
  border-radius: 16px;
  height: 32px;
  width: 80px;
  background-color: #1DB954;

  :hover {
    cursor: pointer;
    width: 96px;
    color: white;
  }
`

const OptionsContainer = styled.div`
    margin-top: 104px;
    text-align: center;

    p:hover {
        cursor: pointer;
        background-color: #696969;
        border-radius: 8px;
    }
`

const CreateContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;

    img {
        height: 16px;
        width: 16px;        
    }

    p {
        font-size: 20px;
    }

    :hover {
        cursor: pointer;
        background-color: #696969;
        border-radius: 36px;
    }
`

class SearchTable extends React.Component {
    render() {
        return (
            <div>
                <UserContainer>
                    <div>
                        <UserPhoto src={catAlice} />
                        <div>
                            {this.props.user}
                        </div>
                        <Botao onClick={this.props.logout}>sair</Botao>
                    </div>
                </UserContainer>
                <OptionsContainer>
                    <p onClick={this.props.irParaHomePage}>Início</p>
                    <p>Buscar</p>
                    <p>Sua biblioteca</p>
                </OptionsContainer>
                <hr />
                <CreateContainer>
                    <img src={addIcon}></img>
                    <p onClick={this.props.criaLista}>Criar playlist</p>
                </CreateContainer>
            </div>
        );
    }
}
export default SearchTable;