import { useState } from 'react'
import './index.css'

function SearchAutoComplete() {

    const [searchTerm, setSearchTerm] = useState("ma")
    const [getData, setGetData] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(false);
  const [getErrors, setGetErrors] = useState(null);
    

    async function fetchData(){
        try{
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=1000`)
        const data = await response.json()

        if(data){
            setGetData(data.products)
            
            console.log(getData)
            
        }
        }catch(e){
            setGetErrors(e.message)
            setLoading(false)
    }

    useState(()=>{
        fetchData()

        if(searchTerm && searchTerm.length > 1){
            let copyData = [...getData]

            console.log(copyData)

            

            setSearchResults(copyData)
            setLoading(false)
        }
    }, [searchTerm])

    if (getErrors) {
        return <h1>{getErrors}</h1>;
      }
    
      if (loading) {
        return <h1>Data Loading ! Please Wait...</h1>;
      }


  return (
    <div className='SearchAutoComplete'>
        <input type="text" onChange={(e)=> setSearchTerm(e.target.value)} placeholder='Enter Search Term...' />
        <div>
            <ul>
                {
                    searchResults && searchResults.length > 0? 
                    searchResults.map((product, index)=>{
                                <li key={index}>{product.title}</li>
                            }
                        )
                    :null
                }
            </ul>
        </div>
    </div>
  )
}

export default SearchAutoComplete