import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios.get(url , {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then((res) => {
        setData(res.data)
      })
      .catch(() => {
        alert("Ops, ocorreu um erro! Tente novamente :)")
      })
  }, [url])

  return data
};

export default useRequestData;