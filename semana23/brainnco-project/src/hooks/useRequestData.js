import { useEffect, useState } from 'react';
import axios from 'axios';

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);

  const getData = async() => {
    await axios.get(url)
      .then((res) => {
        console.log(res.data)
        setData(res.data);
      })
      .catch((err) => {
          console.log(err.message)
        // alert("Ops, ocorreu um erro! Tente novamente :)");
      });
  };

  useEffect(() => {
    getData();
  }, [url]);

  return {data, getData};
};

export default useRequestData;