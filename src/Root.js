
import React from "react";
import Class from "./Class.jsx"
import Hook from "./Hook.jsx"
  class Root extends React.Component{
    render(){
        return (
            <div style={{display: "flex"}}>
                <Class/>
                 {/* <Hook/> */}
            </div>
        )
    }
  }
  export default Root;