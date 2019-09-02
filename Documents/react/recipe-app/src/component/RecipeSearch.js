import React, { Component } from "react";

export default class RecipeSearch extends Component {
  render() {
      const {value,handleChange,handleSubmit}=this.props;
    return (
      <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-10 col-md-8 mx-auto my-3 text-center">
                    <h1 className="text-slanted text-capitalize mt-3">search for recipe with {" "}
                        <strong className="text-danger" >Food2Fork</strong>
                    </h1>
                    <p className="text-capitalize mt-3">Type recipes seperated by comma</p>
                    <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input type="text" 
                        className="form-control" 
                        placeholder="chicken,onions,carrots..."
                        value={value}
                        onChange={handleChange}
                        />
                        <div className="input-group-append">
                        <button type="submit" className="input-group-text bg-primary text-white">
                        <i className="fa fa-search "></i>
                        </button>
                        </div>
                    </div>

                    </form>
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}
