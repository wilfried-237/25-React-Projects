import { useEffect } from "react"

function useOutsideClick(ref, handler) {

    useEffect(()=>{

        function listener(event){
            if(!ref.current || ref.current.contains(event.target)){
                return;
            }

            handler();
        }

        document.addEventListener("mousedown", listener)
        document.addEventListener("touchstart", listener)


    }, [ref, handler])
 
}

export default useOutsideClick