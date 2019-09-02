import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item,handleChange,handleSubmit,editState}=this.props;
        return (
            <div className="card card-body">
                <form onSubmit={handleSubmit}> 
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text text-white bg-primary">
                            <i className="fa fa-file-text"></i>
                            </span>
                        </div> 
                        <input style={{outline: "none"}} required type="text" className="form-control" placeholder="Add todo"
                        value={item}
                        onChange={handleChange}
                        /> 
                    </div>

                   {editState
                        ?<button type="submit" className="btn btn-success btn-block">Edit Item</button>
                        :<button type="submit" className="btn btn-primary btn-block">Add Item</button>
                   }
                </form>
            </div>
        )
    }
}
