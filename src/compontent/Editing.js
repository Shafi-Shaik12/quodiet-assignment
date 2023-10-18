import React from 'react'

const Editing = ({inputname, clickEditing, higschl, Undergraduate, bachelor, Professional,  isprofessional, isbachelor, isundergraduate, ishighschool}) => {
  return (
    <div>
    <button className={`${inputname === "Editing"? "active":"btn-tier"}`} onClick={() => clickEditing()}>Editing and Proofeeding</button>
    {inputname === "Editing" ? (
      <div className="row-2">
           <button className={`${ishighschool? "active":"btn-tier"}`} onClick={()=>higschl()}>Highschool</button>
    <button className={`${isundergraduate? "active":"btn-tier"}`} onClick={()=>Undergraduate()}>Undergraduate</button>
    <button className={`${isbachelor? "active":"btn-tier"}`}  onClick={()=>bachelor()}>Bachelor</button>
    <button className={`${isprofessional? "active":"btn-tier"}`}  onClick={()=>Professional()}>Professional</button>
      </div>
    ) : null}
  </div>
  
  )
}

export default Editing