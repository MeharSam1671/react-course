import React from "react";
import './user.css';
interface IPROPS{
    userid:number
    name:String
    age:number
    gender:String
    image:string
}
export class Users extends React.Component<IPROPS>{
    constructor(props:IPROPS){
        super(props);
    }
    render(){
        return(
        <>
        <div className="Container">
            <hr />
        <h1>Profile</h1>
        <hr />
        <img src={"../images/"+this.props.name+".jpg"} alt="drysy" />
        <h6>userid : {this.props.userid}</h6>
        <h6>User Name : {this.props.name}</h6>
        <h6>Age : {this.props.age}</h6>
        <h6>Gender : {this.props.gender}</h6>
        
        </div>
        </>
        )
    }
}