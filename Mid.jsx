import Photo from './assets/port.png'
import './Mid.css'
function Mid() {
    return(
        <>
        <div className="dv">
        <div className="first">
        <h1 id="d1">Hi There , I Am TRAPTI</h1>
        <h1 id="d2">Frontend Developer</h1>
        <button id="d3">View Works</button>
        </div>
        <div className="first">
          <img src={Photo} className="trapti" alt="trapti logo" id="d4"/>
          </div>
        </div>
        </>
    )
    
}
export default Mid