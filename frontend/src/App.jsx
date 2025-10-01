import React, { useState } from "react";
import UserCard from "./UserCard";

let response1=[]
function App() {
  
  const [formData, setFormData] = useState({});
  const [userdata, setUserdata]= useState([]);

  let response
  
  const a=[{"ak":"sonu kumar "}]
  
  const handleForm = (e) => {
    e.preventDefault();
    console.log(e.target.value, e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
    handleSubmit;
  }; 
  const handleSubmit = async (e) => {
    e.preventDefault();
    response = await fetch("https://people-directory-veuq.onrender.com", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(formData),

      
    });
   setTimeout(()=>{ setUserdata(...userdata+response)},20)
    console.log('response',response);
    response1=await response.json()
    response1=(response1)
    //console.log("responsejson",await response.json());//.json()
    //console.log("response1",response1);
    setUserdata(response1)
  };


  return (
    <>
  <div className="user">
    <div className="div">
     { <form onSubmit={handleSubmit}><h3 className="p" >Directory Lookup Tool</h3><br/>
        {/* <p>{JSON.stringify(formData)}</p> */}
        
        <input type="text" name="username" id="user" onChange={handleForm} placeholder="Enter name ,city, mobile, address"className="username" />
        <br />
       
        {/* <input type="password" name="password" id="pass" onChange={handleForm} placeholder="Enter password" className="password" /> */}
        <br /><br />
        <input type="submit"  value="Search" className="submit"/>
        </form>}
    </div>
    
     {response1.map((item, index1) =><div> <UserCard key={index1} fullName={response1.full_name} city={response1[index1].city} Mobile_Number={response1[index1].mobile_number}  Email={response1[index1].email} Complete_Address={response1[index1].complete_address} index={index1} /></div>)}</div>
     
    </>
  );
}

export default App;
