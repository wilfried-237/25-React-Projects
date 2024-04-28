import './index.css'
import useWindowResize from './useWindowResize'

function WindowsResize() {

    const [width, height] = useWindowResize();

  return (
    <div className='WindowsResize'>
        <h1>Windows Width: {width}</h1>
        <h1>Windows Height: {height}</h1>
    </div>
  )
}

export default WindowsResize