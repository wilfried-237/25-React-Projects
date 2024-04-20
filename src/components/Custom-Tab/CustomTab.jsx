import './index.css'
import data from './data'
import { useState } from 'react'

function CustomTab() {

  const [currentTab, setCurrentTab] = useState(0)

  console.log(data)

  function handleClick(index){
    setCurrentTab(index)
  }

  return (
    <div className='CustomTab'>
      <h1>Custom Tab</h1>
      <div className='tab'>
          { data && data.length > 0? 
              data.map((dataItem, i)=>{
                return(
                  <p key={i} className={currentTab == i? "active-tab" : "inactive-tab"} onClick={()=> handleClick(i)}>{dataItem.label}</p>
                )
              })
              :null
          }
      </div>
      <div className='content'>
        {
              data && data.length > 0? 
                data.map((dataItem, index)=>{
                  return(
                    <span key={index} className={currentTab == index? "active-content" : "inactive-content"}>{dataItem.content}</span>
                  )
                })
              :null
            }
      </div>
    </div>
  )
}

export default CustomTab