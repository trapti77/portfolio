import './Conn.css'
function Cnt()
{
    return (
        <>
       <div className="cnt">
        <h1 id="cn">Contact Us</h1>
        <div className="con">
            Name :<input type="text"  className='n1'  placeholder='Name'/><br />
            Email :<input type="email" className='n1' placeholder='Email'/><br /><br /> Feedback : <br />
            <textarea name="" id="" className='n1' cols="30" rows="10" placeholder='feedback'></textarea> <br />
            <input type="button" value="send" className='s'/>
        </div>
       </div>
       </>
    )
}
export default Cnt