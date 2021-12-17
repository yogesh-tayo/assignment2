import React from 'react'
// import './Profile.css';
class Profile extends React.Component{
    constructor(){
        super();
        this.state={
            name:'TOM',
            location:"New York",
            blood:'B+',
            age:'28'

        }
        

    }
    render(){
        return(
            <div>
            <img src="https://www.w3schools.com/howto/img_avatar.png" width={200} alt='photoofperson'/>
            <div id="name">{this.state.name}</div>
            <div id="lo">Location<br></br></div>
            <div id="Location">
            {this.state.location}
            </div>
            <br></br>
            
            <div id="blood">Blood Group<br></br></div>
           <div id="blo"> {this.state.blood}</div>
           <br></br>
           
            <div id="age">Age<br></br></div>
            <div id="ag">{this.state.age}</div>
            

            </div>
            
        )
    }
}
export default Profile;
// 