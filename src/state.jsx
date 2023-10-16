import React from "react";
import { student } from "./student";
import { Input } from "antd";
class State extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        data: student,
        count : 1,
        name : "",
        status: "",
        search: "id",
        active: null,
        
    }
    }
    render(){
    
        <br/>
        const onChange=(event)=>{
            this.setState({[event.target.name] : event.target.value });
        }
        const onFilter=(event)=>{
            const {value}= event.target;
           let res =  student.filter((item)=>`${item[this.state.search]}`.toLowerCase().includes(value.toLowerCase()));
           this.setState({
            data: res,
           })
        }
        const onDelete=(id)=>{
            
            let res = this.state.data.filter(value=> value.id !==id)
            this.setState({data:res})

        };
        const onAdd=()=>{
         let user ={
            id: Date.now(),
            name:this.state.name,
            status:this.state.status,
         }
         this.setState({
            data:[...this.state.data, user],
            name:"",
            status:""})
        };

        const onEdit=({id,name,status},isSave)=>{
            if(isSave){
                let res = this.state.data.map((value)=> value.id === this.state.active.id ? {...value,name:this.state.name,status: this.state.status}: value)
                this.setState({active: null,data:res});

            }else{
                this.setState({
                    name:name,
                    status:status,
                    active:{id,name,status}
                })
            }
            
        }
        const onSelect =(event)=>{
            this.setState({search:event.target.value})
            
        }
        
        return(
            <div>
                <h1>Name:{this.state.name}</h1>
                
                <h1>Status:{this.state.status}</h1>
                
                <input onChange={onFilter} type="text" placeholder="Filter" />
                <br />
                <hr />
                 <br /> 
                <input value={this.state.name} name="name" onChange={onChange} type="text" placeholder="Name"/>
                <input value={this.state.status} name="status" onChange={(event)=>onChange(event)} type="text" placeholder="Status"/>
                <button onClick={onAdd}>Add</button>
                <br />
                <select onChange={onSelect} name="" id="">
                    <option value="id">ID</option>
                    <option value="name">Name</option>
                    <option value="status">Status</option>

                      
                </select>
                <br />
                <table border={"2px"} width={"45%"}bgcolor="yellow">
                    <thead>
                       <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Delete</th>
                        <th>Edit</th>
                       </tr>
                    </thead>
                    <tbody>

                {
                    this.state.data.length ?
                    this.state.data.map(({id,name,status})=>{
                        return(
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{this.state.active?.id ===id ? <input onChange={onChange} name="name" value={this.state.name} type=""/> : name}</td>
                                <td>{this.state.active?.id ===id ? <input onChange={onChange} name="status" value={this.state.status} type=""/> : status}</td>
                                <td><button onClick={()=>onDelete(id)}>Delete</button></td>
                                <td><button onClick={()=>onEdit({id,name,status},this.state.active?.id ===id )}>{this.state.active?.id ===id ? "save" : "edit"}</button></td>
                                </tr>
                            )
                        })
                        : <tr>
                            <th colSpan={"5"}>
                                <h1>No Data</h1>
                            </th>
                        </tr>
                    }
                    </tbody>
                    </table>

            </div>
        )
    }
}
export default State;
