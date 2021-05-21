import React from 'react';
// import styled from 'styled-components';
// import axios from 'axios';

class SearchTable extends React.Component {
    render() {
        return (
            <div>
                <p onClick={this.props.irParaHomePage}>Início</p>
                <p>Buscar</p>
                <p>Sua biblioteca</p>
                <button onClick={this.props.criaLista}>Criar playlist</button>
            </div>
        );
    }
}
export default SearchTable;