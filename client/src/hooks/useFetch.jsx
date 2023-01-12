import {useState, useEffect} from 'react'
import { makeRequest } from '../makeRequest'

const useFetch = (url) => {

    const [data, SetData] = useState(null)
    const [loading, SetLoading] = useState(false)
    const [error, SetError] = useState(false)


    useEffect(() => {
        const fetchData = async () => {
          try {
            SetLoading(true)
            const res = await makeRequest.get(url)
            SetData(res.data.data);
          }
          catch(err) {
            SetError(true)
          }
          SetLoading(false)
        };
        // console.log(fetchData());
        fetchData();
      }, [url])
    
      return {data, loading, error };
}

export default useFetch;