import "./index.css"
import useLocalStorage from "./useLocalStorage"

function LightDarkMode() {

    const [theme, setTheme] = useLocalStorage("theme", "dark")

    function handleThemeChange(){
        setTheme(theme=="light"? "dark" : "light")
        console.log(theme)
    }
    console.log(theme)

  return (
    <div className="LightDarkModeDiv" data-theme = {theme}>
        <div className="container">
            <p>Click on the Button Below to switch Light/Dark Mode</p>
            <button onClick={()=> handleThemeChange()}>Light/Dark Mode</button>
        </div>
    </div>
  )
}

export default LightDarkMode