import React,{ Component} from 'react';
import "./Tour.scss";

export default class  Tour extends Component {
    state={
        showInfo:false
    }
    handleInfo=()=>{
        this.setState({
            showInfo:!this.state.showInfo
        });
    }

    render(){
      const{id,city ,img ,name , info} = this.props.tour;
      const {removeTour}=this.props;
    return (
        <article className="tour">
       <div className="img-container">
           <img 
           
            src={img} alt="abc"></img> 
          <span className="i-close"
           onClick= {()=>{removeTour(id)
        }}
        >
              <i className="fas fa-window-close"></i>
          </span>
       </div>
       <div className="text">
           <h3>{city}</h3>
           <h4>{name}</h4>
           <h5>Infor
            <span onClick={this.handleInfo.bind(this)}>
            <i className="far fa-caret-square-down"></i>
            </span>

           </h5>
           {this.state.showInfo && <p>{info}</p>}
           
       </div>
       </article>
    );
    }
}