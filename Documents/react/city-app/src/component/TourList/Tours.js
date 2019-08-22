import React,{Component} from 'react';
import "./TourList.scss";
import Tour from "../Tour/Tour";
import {tourData} from '../tourData';

export default class Tours extends Component
{
    state={
        tours: tourData
    }
    removeTour=id=>{
        const{tours}=this.state;
        this.setState({
        tours: tours.filter(tour=>(tour.id!==id))
        });

    }

    render(){
        const {tours}=this.state;
    return (

        <div className="tourList">
       {tours.map(tour=>(
       <Tour key={tour.id} tour={tour} removeTour={this.removeTour.bind(this)}/>   
       )
        )}
       </div>
    );
    }
}