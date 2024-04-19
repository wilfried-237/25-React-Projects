import { useState } from "react"
import SubMenu from "./SubMenu"
import	"./index.css"

function MainMenu(prop) {

   const [display, setDisplay] = useState({})

   function handleDisplay(getcurrentindex){
    setDisplay({
        ...display,
        [getcurrentindex]: !display[getcurrentindex]
    })
   }



  return (
    <>
        {
          prop.data && prop.data.length >0? 
          prop.data.map((main)=>{
              return(
                <div key={main.label} className="mainMenu">
                    <div className="menu">
                    <li >{main.label} </li>
                  {
                    main.children? <span onClick={()=>handleDisplay(main.label)}>{display[main.label]? "-" : "+"}</span> : null
                  }
                    </div>
                  {
                    main.children && main.children.length && display[main.label] > 0? 
                      <ul>
                        <SubMenu subdata={main.children}/>
                      </ul>
                    :null
                  }
                  
                </div>
              )
            })
          : null
        }
    </>
  )
}

export default MainMenu