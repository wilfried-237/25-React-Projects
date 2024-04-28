import { useLayoutEffect, useState } from "react"


export default function useWindowResize() {
    const [windowWidth, setWindowWidth] = useState(0)
    const [windowHeight, setWindowHeight] = useState(0)

    function setSize(){
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    }

    useLayoutEffect(()=>{
        setSize()

        window.addEventListener("resize", setSize)

        return ()=>{
            window.removeEventListener("resize", setSize)
        }
        
    }, [])

    return [windowWidth, windowHeight];
}