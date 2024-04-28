import './index.css'
import useFetch from './useFetch'

export default function UseFetchHookTest() {

  const [data, loading, error] = useFetch("https://dummyjson.com/products", {})

  return (
    <div className='UseFetchHookTest'>
      <h1>Use Fetch Hook</h1>
      {
        loading? <h2>Data Loading ! Please Wait</h2> : null
      }
      {
        error? <h2>{error}</h2> : null
      }
      {
        data && data.products && data.products.length > 0? 
          data.products.map((dataItem)=> <p key={dataItem.id}>{dataItem.title}</p>)
        : null
      }
    </div>
  )
}