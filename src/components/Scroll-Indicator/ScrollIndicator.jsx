// import { useEffect, useState } from 'react'
import './index.css'
import data from './data.js'
import { useEffect, useState } from 'react'

function ScrollIndicator() {

    // const [data, setData] = useState([])
     const [scrollPercentage, setScrollPercentage] = useState(0)



    // async function fetchData(){

    //      try{
    //         const response = await fetch("https://dummyjson.com/products")

    //         const newData = await response.json()

    //         setData(newData.products)

    //      }catch(e){
    //         console.log(e)
    //      }
    // }

    // useEffect(()=>{
    //     fetchData()

    //  }, [])

    function handleScrollPercentage(){

        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        setScrollPercentage(
            howMuchScrolled/height*100
        )
    }

    useEffect(()=>{

        window.addEventListener('scroll', handleScrollPercentage)

        return ()=>{
            window.removeEventListener("scroll", ()=>{})
        }

    }, [])

  return (
    <div className='ScrollIndicator'>
        <div className="topDiv">
            <h1>Custom Scroll Indicator</h1>
            <div className="scroller">
                <div className="scroll" style={{width: `${scrollPercentage}%`}}></div>
            </div>
        </div>
        <div className="dataDiv">
        {
            data && data.length > 0?
                data.map((item, i)=>{
                    return(
                        <p key={i}>{item}</p>
                    )
                })
            :null
        }
        </div>
    </div>
  )
}

export default ScrollIndicator