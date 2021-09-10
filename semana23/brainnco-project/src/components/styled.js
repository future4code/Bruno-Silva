import styled from 'styled-components';

export const SelectContainer = styled.select`
    margin-top: 40px;
    width: 215px;
    height: 45px;
    border-radius: 8px;
    font-weight: 500;
    font-size: 15px;

    :hover {
        cursor: pointer;
    };

    @media screen  and (max-width : 420px){
        width: 233px;
        height: 51px;
    };
`