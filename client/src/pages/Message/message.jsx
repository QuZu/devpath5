import React from "react";
import { useState ,useEffect } from "react";
import {useParams} from "react-router-dom"
var mycrypto = require("crypto-js")
function MessagePage() {
    const {messages} = useParams();
    const[hashvalue,sethashvalue]=useState("")

    const[result,setresult]=useState(()=>{
      return localStorage.getItem("allHash") || []
    });

    const[loading,setLoading]=useState(false)

      const getHash=()=>{
      try{
        const hash = mycrypto.SHA256(messages)
        //console.log(hash.toString(mycrypto.enc.Hex));
        const hexvalue=hash.toString(mycrypto.enc.Hex);
 
        let temp=[];
        temp=[...JSON.parse(result)];
        
        console.log("Temp: ",temp);
        const toAdd={
          hash:hexvalue,
          message:messages,
        };
        temp.push(toAdd);
        localStorage.setItem("allHash",JSON.stringify(temp));
        sethashvalue(hexvalue);
        setLoading(true);
        
      }
        catch(err)
        {
          console.log(err);
        }
      }

    useEffect(() => {
      getHash();
      },[]);
    console.log("Local İtem;",localStorage.getItem("allHash"));
    return (
    <>
    { loading ?
      <div className="message-outer-container">
        <h1 style={{textAlign: "center", marginTop: "172px"}}>Your Hash</h1>
        <h1 style={{textAlign: "center", marginTop: "172px"}}>{hashvalue}</h1>
      </div>
      :
      <h1 style={{textAlign: "center", marginTop: "172px"}}>Loading...</h1>
    }
      </>
    );
  }
  export default MessagePage;