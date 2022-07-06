import React from "react";
function PatientName(props){
     return(<div>
        <h1>Hello,{props.name}</h1>
        <h1>Your UserName is {props.Pid} </h1>
     </div>)
}
export default PatientName;