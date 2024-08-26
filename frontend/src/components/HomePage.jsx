import Navbar from "./Navbar"
import Footer from "./Footer"
import  Axios  from "axios"
import { useState } from "react"
// import { useNavigate } from 'react-router-dom';


function HomePage() {

  // const navigator = useNavigate();
 
  const [designcapacity , setDesignCapacity] = useState('');
  const [fullcharge , setFullChargeCapacity] = useState('');
  const [dischargetime , setDischargeTime] = useState('');
  const [chargetime , setChargeTime]  = useState('');

  // const URL = "";

  const handleSubmit  = async(e) => {
    e.preventDefault();
    try{
      const res = await Axios.post("http://localhost:5000/details", {designcapacity,fullcharge,dischargetime,chargetime});
    //   navigator('/l');
    //   setTimeout(() => {
    //   navigator('/dash');
    //  }, 1000);
      console.log(res, "detail is successful uploaded ")
    }catch(err){
     console.log("error ", err);
    }
  }

  return (
    <>
    <Navbar/>
      <div>
      {/* ? image form the top of the page in home page  and website name */}
      <div>
        <img src="" className=""/>
      </div>
      {/* discription of the website  and other details */}
        <div>
        <div>
          <h3>lorem</h3>
        </div>
      {/* ? this for input field  in title and four input field */}
          <form onSubmit={handleSubmit} action="post">
            <input 
            type="text" 
            placeholder="Design Capcaity" 
            value={designcapacity}  
            onChange={(e) => setDesignCapacity(e.target.value)}

            />
            <input 
             type="text"
             placeholder="Full Charge Capacity"
             value={fullcharge}  
             onChange={(e) => setFullChargeCapacity(e.target.value)}
             />
            <input 
              type="text" 
              placeholder="Charging Time"
              value={chargetime}  
              onChange={(e) => setChargeTime(e.target.value)}
              />
            <input 
            type="text" 
            placeholder="DisCharging Time"
            value={dischargetime}  
            onChange={(e) => setDischargeTime(e.target.value)} 
            />
            <div>
              <button onClick={handleSubmit}>Resolve</button>
            </div>
          </form>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default HomePage
