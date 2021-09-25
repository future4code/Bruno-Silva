import React, { useContext } from 'react';

import { PageContainer, TextContainer, MainContainer, TableContainer } from './styled';
import Header from '../../components/Header/Header';

import { Doughnut } from 'react-chartjs-2';
import randomColor from 'randomcolor';
import GlobalStateContext from '../../global/GlobalStateContext';


const HomePage = () => {
    const { participants } = useContext(GlobalStateContext);
    let cont = 0;

    const data = {
        labels: participants && participants.map(participant => `${participant.firstName} ${participant.lastName}`),
        datasets: [
            {
                label: "Participation Chart",
                data: participants && participants.map(participant => participant.participation),
                backgroundColor: participants && participants.map(() => randomColor()),
                borderColor: ["lightgrey"]
            }
        ]
    };

    const tableParticipants = participants && participants.map((participant) => {
        return (
            <tr key={participant.id}>
                <td>{cont += 1}</td>
                <td>{participant.firstName}</td>
                <td>{participant.lastName}</td>
                <td>{participant.participation}%</td>
            </tr>
        )
    })

    return (
        <PageContainer>
            <Header />
            <TextContainer>
                <h2>DATA</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </TextContainer>
            <MainContainer>
                <TableContainer>
                    <table>
                        <tr>
                            <td></td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Participation</td>
                        </tr>
                        {tableParticipants}
                    </table>
                </TableContainer>
                <div>
                    {participants ? <Doughnut data={data} /> : <p>Loading...</p>}
                </div>
            </MainContainer>
        </PageContainer>
    );
};

export default HomePage;