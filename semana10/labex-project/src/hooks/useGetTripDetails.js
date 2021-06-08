import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetTripDetails = (url, initialState) => {
    const [tripDetails, setTripDetails] = useState(initialState);

    useEffect(() => {
        // const header = {
        //     headers: {
        //         auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkNmbjZPd0YyOVU5TDJSYzV0UWo1IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1NzMxNDM4Njh9.mmOrfGKlXpE3pIDUZfS3xV5ZwttOI2Exmoci9Sdsxjs";
        //     }
        // }

        axios
            .get(url, header)
            .then((res) => {
                setAllTrips(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [url]);

    return tripDetails;
};

export default useGetTripDetails;