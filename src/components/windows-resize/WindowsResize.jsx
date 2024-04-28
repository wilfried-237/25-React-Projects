import './index.css'
import useWindowResize from './useWindowResize'

function WindowsResize() {

    const [width, height] = useWindowResize();

  return (
    <div className='WindowsResize'>
        <h1>Use Window Resize Hook</h1>
        <p>Windows Width: {width}</p>
        <p>Windows Height: {height}</p>
    </div>
  )
}

export default WindowsResize