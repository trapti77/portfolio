import './Pro.css'
import Photo1 from './assets/bc.png'
import Photo2 from './assets/ol.png'
import Photo3 from './assets/netflix.png'
import Photo4 from './assets/cal.png'
import Photo5 from './assets/st.png'
import Photo6 from './assets/todo.png'
import Photo7 from './assets/fm1.png'
function Pro()
{
    return(
     <>
     <h1 className='p1'>My Projects</h1>
     <div className="pr">
          <div className='dv5'><img src={Photo7} alt="farmx" className='td' /><pre className='p5'>FarmX</pre>
          <div className="btt"><a href="" className='bt1'>view</a><a href="" className='bt2'> code</a></div></div>
          <div className='dv5'><img src={Photo6} alt="todo" className='td'/><pre className='p5'>Todo List</pre>
          <div className="btt"><a href="" className='bt1'>view</a><a href="" className='bt2'> code</a></div></div>
          <div className='dv5'><img src={Photo3} alt="Netflix" className='td'/><pre className='p5'>Netflix Clone</pre>
          <div className="btt"><a href="" className='bt1'>view</a><a href="https://github.com/trapti77/Netflix_Clone" className='bt2'> code</a></div></div><br/>
          <div className='dv5'><img src={Photo4} alt="calcu" className='td' /><pre className='p5'>Calculator</pre> 
          <div className="btt"><a href="" className='bt1'>view</a><a href="" className='bt2'> code</a></div></div>
          <div className='dv5'><img src={Photo1} alt="bmi" className='td'/><pre className='p5'>BMI Calculator</pre>
          <div className="btt"><a href="" className='bt1'>view</a><a href="" className='bt2'> code</a></div></div>
          <div className='dv5'><img src={Photo2} alt="ol" className='td'/><pre className='p5'>Online Test Website</pre>
          <div className="btt"><a href="" className='bt1'>view</a><a href="" className='bt2'> code</a></div></div><br />
          {/*<div className='dv5'><img src={Photo5} alt="st" className='td'/><pre className='p5'>Stop Watch</pre> Technology Used-:<br />Html, Css ,JavaScript</div>*/}
       </div>
     <button id='btn'>More Works</button>
    </>
    )
}
export default Pro
