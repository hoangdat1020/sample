import React, { Component } from "react";
import { recipe } from "../tempDetails";

export default class RecipeDetails extends Component {
  constructor(props){
    super(props);
    this.state={
      recipe:recipe,
     url:`https://www.food2fork.com/api/get?key=f1a6e7e66339b94bf296dee31c53ca26&rId=${this.props.details_id}`
    }

  }
  
async componentDidMount() {
  // const url = `https://www.food2fork.com/api/get?key=f1a6e7e66339b94bf296dee31c53ca26&rId=${details_id}`;
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState(
        (state,props)=>{
          return {recipe:jsonData.recipe};

        }
      );
      
    } catch (error) {
      console.log("ERROR")
    }
  }
  render() {
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients
    }=this.state.recipe;
    const { handleIndex } = this.props;
    if(!ingredients){
      return (
        <h1>Loading</h1>
      );
    }
    if(ingredients){
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <div className="component-right">
                <button
                  type="button"
                  onClick={() => {
                    handleIndex(1);
                  }}
                  className="btn btn-warning mb-5"
                >
                  Back to Recipe List
                </button>
                <div className="card">
                  <img
                    src={image_url}
                    alt="recipe"
                    className="card-img-top"
                  />
                </div>
              </div>
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
              <div className="component-left mt-3 mx-auto">
                <div className="mb-3">
                  <h6 className=" text-capitalize">{title}</h6>
                  <h6 className="text-danger text-capitalize text-slanted">
                    provided by {publisher}
                  </h6>
                </div>
                <a
                  href={publisher_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mr-3"
                >
                  Publisher Webpage
                </a>
                <a
                  href={source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success"
                >
                  Recipe Url
                </a>
                <ul className="mt-3 list-group ">
                  <h2 className="text-capitalize mb-4">ingredients</h2>
                  {ingredients.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className=" text-slanted list-group-item "
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );}
  }
}
