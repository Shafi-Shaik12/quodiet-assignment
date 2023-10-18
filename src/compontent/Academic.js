import React from 'react'


const Academic = ({inputname, clickAcademic, higschl, bachelor, Undergraduate, Professional, isprofessional, isbachelor, isundergraduate, ishighschool, isenable }) => {
  return (
  
    
    <div>
      <button className={`${inputname === "Academic"? "active":"btn-tier"}`} onClick={()=> clickAcademic()}>Academic Writing</button>
         {inputname === "Academic"? <div className="row-1">
    <button className={`${ishighschool? "active":"btn-tier"}`} onClick={()=>higschl()}>Highschool</button>
    <button className={`${isundergraduate? "active":"btn-tier"}`} onClick={()=>Undergraduate()}>Undergraduate</button>
    <button className={`${isbachelor? "active":"btn-tier"}`}  onClick={()=>bachelor()}>Bachelor</button>
    <button className={`${isprofessional? "active":"btn-tier"}`}  onClick={()=>Professional()}>Professional</button>
    </div>
    :null}
    </div>
  )
}

export default Academic