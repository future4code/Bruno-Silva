import React, { useContext } from 'react';

import { PageContainer } from './styled';
import Header from '../../components/Header/Header';

import { Doughnut } from 'react-chartjs-2';
import randomColor from 'randomcolor';
import GlobalStateContext from '../../global/GlobalStateContext';


const HomePage = () => {
    const { participants } = useContext(GlobalStateContext);

    const randomColor = require('randomcolor'); // import the script
    const color = randomColor(); // a hex code for an attractive color
    const color1 = randomColor();
    const color2 = randomColor();

    const data = {
        labels: participants.map(participant => `${participant.firstName} ${participant.lastName}`),
        datasets: [
            {
                label: "sei la",
                data: participants.map(participant => participant.participation),
                backgroundColor: participants.map(participant => randomColor()),
                borderColor: ["blue"]
            }
        ]
    };

    const tableParticipants = participants.map((participant) => {
        return (
            <div>
                <li>{participant.firstName}</li>
                <li>{participant.lastName}</li>
                <li>{participant.participation}</li>
            </div>
        )
    })

    return (
        <PageContainer>
            <Header />
            <div>
                <div>
                    {tableParticipants}
                </div>
                <div>
                    chart
                </div>
                <Doughnut data={data} />
            </div>
        </PageContainer>
    );
};

export default HomePage;