import React from "react";
import { useState ,useEffect } from "react";
import {useParams} from "react-router-dom"
function HashPage() {
  const{hashvalue}=useParams()
  let mystringarray=localStorage.getItem("allHash");
  var allarray=[]
  allarray=[...JSON.parse(mystringarray)]
  console.log("Myarray:",allarray);
  const[loading,setLoading]=useState(false)
  const[mymessage,setmymessage]=useState("");
  const getresult = async()=>{
    try{
      var result=(allarray.find(({hash})=>hash === hashvalue));
      if(result){
        setmymessage(result.message);
        setLoading(true);
      }
      else{
        setLoading(false);
      }

    }
      catch(err)
      {
        console.log(err);
      }
    };
  useEffect(() => {
      getresult();
    }, [])
    return (
      <>
    { loading ?
      <div className="message-outer-container">
        <h1 style={{textAlign: "center", marginTop: "172px"}}>Your Message with this Hash</h1>
        <h1 style={{textAlign: "center", marginTop: "172px"}}>{mymessage}</h1>
      </div>
      :
      <h1 style={{textAlign: "center", marginTop: "172px"}}>404 NOT FOUND</h1>
    }
      </>
    );
  }
  export default HashPage;