import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetTripDetails = (url, initialState) => {
    const [tripDetails, setTripDetails] = useState(initialState);
    const token = localStorage.getItem("token");

    useEffect(() => {
        const header = {
            headers: {
                auth: token
            }
        }

        axios
            .get(url, header)
            .then((res) => {
                setTripDetails(res.data.trip)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [url]);

    return tripDetails;
};

export default useGetTripDetails;