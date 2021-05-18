import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`

class ListaDeUsuarios extends React.Component {
    render() {
        const usuariosExistentes = this.props.usuarios.map((user) => {
            return (
                <ListContainer>
                    <li key={user.id}>{user.name}</li>
                    <button onClick={() => this.props.removerUsuario(user.id)}>Remover</button>
                </ListContainer>
            );
        });

        return (
            <div>
                <h2>Lista de Usuários</h2>
                <div>{usuariosExistentes}</div>
            </div>
        );
    }
}

export default ListaDeUsuarios;