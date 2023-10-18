import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";
import "./project.css";
import Academic from "./Academic";
import Editing from "./Editing";
import Calculations from "./Calculations";

const Projects = () => {   
  const list = [
    "Rearchpaper",
    "Rearch proposal",
    "Speech",
    "Thesis,Thesis propsal",
    "Thesis statement",
  ];
  const [isenable, setIsenable] = useState(false);
  const [number, setnumber] = useState(0);
  const [inputname, setInputName] = useState("");
  const [ishighschool, setIshighschool] = useState(true);
  const [isundergraduate, setIsundergraduate] = useState(false);
  const [isbachelor, setIsbachelor] = useState(false);
  const [isprofessional, setIsprofessional] = useState(false);
const ClearInput = () =>{
    setnumber(0)
}
  const clickAcademic = () => {
    if (inputname === "Editing" || inputname === "Calculations") {
      setInputName("");
    }
    setInputName("Academic");
  };
  const clickEditing = () => {
    if (inputname === "Academic" || inputname === "Calculations") {
      setInputName("");
    }
    setInputName("Editing");
  };
  const clickCalculations = () => {
    if (inputname === "Academic" || inputname === "Editing") {
      setInputName("");
    }
    setInputName("Calculations");
  };
  const handleChange = (e) => {
    let newValue = 1;

    switch (inputname) {
      case "Academic":
        newValue = ishighschool
          ? 12 * parseInt(e.target.value)
          : isundergraduate
          ? 16 * parseInt(e.target.value)
          : isbachelor
          ? 20 * parseInt(e.target.value)
          : isprofessional
          ? 24 * parseInt(e.target.value)
          : 0;
        break;
      case "Editing":
        newValue = ishighschool
          ? 4 * parseInt(e.target.value)
          : isundergraduate
          ? 6 * parseInt(e.target.value)
          : isbachelor
          ? 8 * parseInt(e.target.value)
          : isprofessional
          ? 10 * parseInt(e.target.value)
          : 0;
        break;
      case "Calculations":
        newValue = ishighschool
          ? 8 * parseInt(e.target.value)
          : isundergraduate
          ? 10 * parseInt(e.target.value)
          : isbachelor
          ? 14 * parseInt(e.target.value)
          : isprofessional
          ? 16 * parseInt(e.target.value)
          : 0;
        break;
      default:
        newValue = 0;
    }

    setnumber(newValue); 
  };
  const higschl = () => {
    if (
      isundergraduate === true ||
      isbachelor === true ||
      isprofessional === true
    ) {
      setIshighschool(true);
      setIsbachelor(false);
      setIsprofessional(false);
      setIsundergraduate(false);
    }
    ClearInput()
  };
  const bachelor = () => {
    if (
      isundergraduate === true ||
      ishighschool === true ||
      isprofessional === true
    ) {
      setIshighschool(false);
      setIsbachelor(true);
      setIsprofessional(false);
      setIsundergraduate(false);
    }
    ClearInput()
  };
  const Undergraduate = () => {
    if (
      ishighschool === true ||
      isbachelor === true ||
      isprofessional === true
    ) {
      setIshighschool(false);
      setIsbachelor(false);
      setIsprofessional(false);
      setIsundergraduate(true);
    }
    ClearInput()
  };
  const Professional = () => {
    if (
      isundergraduate === true ||
      isbachelor === true ||
      ishighschool === true
    ) {
      setIshighschool(false);
      setIsbachelor(false);
      setIsprofessional(true);
      setIsundergraduate(false);
    }
    ClearInput()
  };

useEffect(()=>{
        setIsenable(true)
},[])



  return (
    <div className="outer">
        
    <div>
        <div className="card">
            <div className="btns-headers">
         <div>
                <Academic 
        inputname={inputname}
        clickAcademic={clickAcademic}
        higschl={higschl}
        bachelor={bachelor}
        Undergraduate={Undergraduate}
        Professional={Professional}
        isprofessional={isprofessional}
        isbachelor={isbachelor}
        isundergraduate={isundergraduate}
        ishighschool={ishighschool}
        isenable={isenable}
      />
                </div>
     <div>
     <Editing
        inputname={inputname}
        clickEditing={clickEditing}
        higschl={higschl}
        bachelor={bachelor}
        Undergraduate={Undergraduate}
        Professional={Professional}
        isprofessional={isprofessional}
        isbachelor={isbachelor}
        isundergraduate={isundergraduate}
        ishighschool={ishighschool}
      />
     </div>
     <div>
     <Calculations
        inputname={inputname}
        clickCalculations={clickCalculations}
        higschl={higschl}
        bachelor={bachelor}
        Undergraduate={Undergraduate}
        Professional={Professional}
        isprofessional={isprofessional}
        isbachelor={isbachelor}
        isundergraduate={isundergraduate}
        ishighschool={ishighschool}
      />
     </div>
     
      </div>
      </div>
      <h3>Type of paper</h3>
      <select className="typesofpaper">
        {list.map((list, index) => {
          return <option key={index}>{list}</option>;
        })}
      </select>
      <div className="row" style={{padding:"21px"}}>
  <div className="col-sm-6" style={{width:"56%"}}>
    <div className="card">
      <div className="card-body">
        <p className="card-text">Quantity</p>
        <input placeholder={inputname} type="number" onChange={handleChange} className="card-title" />
      </div>
    </div>
  </div>
  <div className="col-sm-6 deadline">
    <div className="card">
      <div className="card-body">
        <p className="card-text">Deadline</p>
        <input type="date"  className="card-title"/>
      </div>
    </div>
  </div>
</div>
      <button className="btn-proceed" >procced to order</button>
      <p>Appox Price</p>
      <p>{number > 0 ? `$ ${number}` : 0}</p>
    </div>
    </div>
  );
};

export default Projects;