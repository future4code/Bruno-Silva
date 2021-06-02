import styled from 'styled-components';

export const UserProfileContainer = styled.div`
    height: 320px;
    display: grid;
    grid-template-rows: 2fr 1fr;
`

export const ProfileImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        height: 104px;
        border-radius: 50%;
    }
`

export const SettingsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;

    div {
        display: flex;
        flex-direction: column;
    }

    p {
        font-size: 10px;
    }

    img {
        height: 48px;
    }

    img:hover {
        cursor: pointer;
        height: 54px;
        width: 54px;
    }
`