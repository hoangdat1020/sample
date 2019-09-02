import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

export default class RecipeList extends Component {
  render() {
    const {
      recipes,
      error,
      handleDetails,
      value,
      handleChange,
      handleSubmit
    } = this.props;
    return (
      <React.Fragment>
        <RecipeSearch
          value={value}
          error={error}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <h1 className="text-slanted text-center ">Recipe List</h1>
        <div className="container">
          <div className="row">
            {error
            ?(<h1 className="text-danger text-slanted text-center mx-auto">{error}</h1>)
            :(recipes.map((recipe, index) => {
              return (
                <Recipe
                  key={index}
                  recipe={recipe}
                  handleDetails={handleDetails}
                />
              );
            }))}
          </div>
          
        </div>
        
      </React.Fragment>
    );
  }
}
