import './index.css'
import useFetch from './useFetch'

export default function UseFetchHookTest() {

  const [data, loading, error] = useFetch("https://dummyjson.com/products", {})

  return (
    <div className='UseFetchHookTest'>
      {
        loading? <h1>Data Loading ! Please Wait</h1> : null
      }
      {
        error? <h1>{error}</h1> : null
      }
      {
        data && data.products && data.products.length > 0? 
          data.products.map((dataItem)=> <p key={dataItem.id}>{dataItem.title}</p>)
        : null
      }
    </div>
  )
}