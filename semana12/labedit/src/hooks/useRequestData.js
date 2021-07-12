import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData)

  const getData = () => {
    axios.get(url , {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then((res) => {
        const orderedByVoteSum = res.data.sort((a, b) => {
          return  b.voteSum - a.voteSum;
        });
        setData(orderedByVoteSum)
      })
      .catch(() => {
        alert("Ops, ocorreu um erro! Tente novamente :)")
      })
  }

  useEffect(() => {
    getData();
  }, [url])

  return {data, getData}
};

export default useRequestData;