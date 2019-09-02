import React, { Component } from "react";

export default class Recipe extends Component {
  render() {
    const {
      image_url,
      publisher,
       recipe_id,
      source_url,
      title
    } = this.props.recipe;
    const {handleDetails}=this.props;
    return (
      <React.Fragment>
        <div className="col-10 mx-auto col-md-6 my-3 col-lg-4 ">
          <div className="card">
            <img
              style={{ height: "14rem" }}
              className="card-img-top"
              src={image_url}
              alt="recipe"
            />
            <div className="card-body">
              <h6>{title}</h6>
              <h6 className="text-slanted text-danger">
                Provide By {publisher}
              </h6>
            </div>
            <div className="card-footer  ">
                
              <button  onClick={()=>handleDetails(0,recipe_id)} className="btn btn-primary mr-3">Details</button>
              <a 
                   href={source_url} 
                   target="_blank"
                   rel="noopener noreferrer" 
                  className="btn btn-success ml-5">Recipe Url</a>
              {/* <button className="btn btn-success ml-5">Recipe Url</button> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
