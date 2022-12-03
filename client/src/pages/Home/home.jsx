import React from "react";

function HomePage() {
  localStorage.setItem("allHash",JSON.stringify([]));
    return (
      <div>
        <h1 style={{textAlign: "center", marginTop: "172px"}}>Welcome Hash Webpage by Enis Mert Kuzu!</h1>
      </div>
    );
  }
  export default HomePage;