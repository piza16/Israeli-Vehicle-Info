import React from "react";
import { SearchArea } from "./components/SearchArea";


function App() {
  return (
    <div style={{backgroundImage:`url("https://i.ibb.co/nmfdtx6/porsche-1851246.jpg")`}} className="h-screen fixed inset-0 flex flex-col items-center justify-start text-black bg-cover bg-top bg-no-repeat">
      {/* flex flex-col items-center justify-center  */}
      {/* <div className="flex items-center animate-bounce"> */}
      <SearchArea/>
      {/* <div className="flex justify-center mt-4"> */} 
    </div>
  );
}

export default App;
