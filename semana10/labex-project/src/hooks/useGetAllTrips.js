import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetAllTrips = (url, initialState) => {
    const [allTrips, setAllTrips] = useState(initialState);

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setAllTrips(res.data.trips)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [url]);

    return allTrips
};

export default useGetAllTrips;