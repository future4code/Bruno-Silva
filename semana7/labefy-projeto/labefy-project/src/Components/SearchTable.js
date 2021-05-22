import React from 'react';
import styled from 'styled-components';
// import axios from 'axios';

const UserContainer = styled.div`
    position: absolute;
    top: 16px;
    left: 16px;

    > div {
        width: 280px;
        display: flex;
        justify-content: space-evenly;
    }
`

const UserPhoto = styled.div`
    width: 40px;
    height: 40px;
    background-color: cyan;
    border-radius: 50%;
`

class SearchTable extends React.Component {
    render() {
        return (
            <div>
                <UserContainer>
                    <div>
                        <UserPhoto>
                            <img></img>
                        </UserPhoto>
                        {this.props.user}
                        <button onClick={this.props.logout}>logout</button>
                    </div>
                </UserContainer>
                <p onClick={this.props.irParaHomePage}>Início</p>
                <p>Buscar</p>
                <p>Sua biblioteca</p>
                <button onClick={this.props.criaLista}>Criar playlist</button>
            </div>
        );
    }
}
export default SearchTable;