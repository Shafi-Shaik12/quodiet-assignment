import React from 'react'

const Calculations = ({inputname, clickCalculations, higschl, Undergraduate, bachelor, Professional,  isprofessional, isbachelor, isundergraduate, ishighschool}) => {
  return (
    <div>
        <button className={`${inputname === "Calculations"? "active":"btn-tier"}`} onClick={()=>clickCalculations()}>Calculations</button>
        {inputname === "Calculations"? <div className="row-3">
        <button className={`${ishighschool? "active":"btn-tier"}`} onClick={()=>higschl()}>Highschool</button>
    <button className={`${isundergraduate? "active":"btn-tier"}`} onClick={()=>Undergraduate()}>Undergraduate</button>
    <button className={`${isbachelor? "active":"btn-tier"}`}  onClick={()=>bachelor()}>Bachelor</button>
    <button className={`${isprofessional? "active":"btn-tier"}`}  onClick={()=>Professional()}>Professional</button>
    </div>
    :null}
</div>
  )
}

export default Calculations