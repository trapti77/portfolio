import cv from './assets/Trapti-page0001.jpg'
import './Nav.css'
//const cv="http://localhost:5173/Trapti-page0001.jpg";
function Nav() {
    /*const downloadFileAtURL=(url)=>{
        const filename=url.split("/").pop();
        const atag=document.createElement("a");
        atag.href=url;
        atag.setAttribute("download",filename);
        document.body.appendChild(atag);
        atag.click();
        atag.remove();
        //-----------btn
        <button id="id1" onClick={()=>{
        downloadFileAtURL(cv);
        }}> Download CV</button>
    };*/
    return(
        <>
    <ul>
    <li> <h1>.TRAPTI PATEL.</h1></li>
    <li><a href="App.jsx" className='aa'>Home</a></li>
    <li><a href="" className='aa'>About</a></li>
    <li>  <a href="#" className='aa'>Skills</a></li>
    <li> <a href="# " className='aa'>Projects</a></li>
    <li> <a href="#" className='aa'>Contact</a></li>
    <li> 
     <button id="bb"> <a href={cv} download="trapti">Download CV</a></button>
        </li>
        </ul>
        </>
    )
}
export default Nav