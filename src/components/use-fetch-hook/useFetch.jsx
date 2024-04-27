import { useEffect } from "react"
import { useState } from "react"


export default function useFetch(url, options={}) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

   async function fetchData(getUrl){
        try{
            setLoading(true);
            const response = await fetch(`${getUrl}`);
            const newData = await response.json();

            if(newData){
                
                setLoading(false);
                setData(newData);
                setError(null);
            }

        }catch(e){
            setLoading(false);
            setError(e.message);
        }
    }

    useEffect(()=>{
        fetchData(url);
        setLoading(false)
    }, [url])


  return [data, loading, error]
}