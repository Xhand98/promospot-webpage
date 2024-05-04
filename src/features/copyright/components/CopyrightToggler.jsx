import React, { useState } from "react";
import "./Copyright.css";
import { CopyTxtEs, CopyTxtEn }  from "./CopyrightTxt";


const Copyright = () => {
  
  const [isTextOne, setIsTextOne] = useState(true);

  const toggleText = () => {
    setIsTextOne(!isTextOne);
  };
  
  return (
    <div className="copybody">
      <div>
      <button onClick={toggleText}>Traducir</button>
      {isTextOne ? (
        <CopyTxtEs/>
      ) : (
        <CopyTxtEn />
      )}
    </div>

        
    </div>
  );
};
export default Copyright;