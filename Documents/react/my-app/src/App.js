import React from 'react';
import './App.css';
const  App=()=>(<PersonList/>)
const PersonList=()=>{
    const people=[
     {
         img:1,
         name:"jone",
         job:"job1"
     },
     {
        img:2,
         name:"jone2",
         job:"job2"
     }
     ,
     {
        img:3,
         name:"jone3",
         job:"job3"
     }


    ]
    return(<div>
    <Person person={people[0]}/>
    <Person person={people[1]}>Hoang Dat 1020</Person>
    <Person person={people[2]}/>
    </div>);
    
}
const Person=props=>{
    const {img,name,job}=props.person;
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
   
    const {children}= props;
    return <div className="person">
        <img src={url} alt=""/>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}

    </div>
}

export default App;
