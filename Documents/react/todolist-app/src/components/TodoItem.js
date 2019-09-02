import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const {title,handleDelete,handleEdit}=this.props;
   
        
        return (
            <li className="py-2 list-group-item d-flex justify-content-between " >
           <h6>{title}</h6>
           
            <div className="todo-icon">
                <span onClick={handleEdit} className="mx-2 text-success">
                    <i className="fas fa-pen"></i>
                </span>
                <span onClick={handleDelete} className="mx-2 text-warning">
                    <i className="fas fa-trash"></i>
                </span>
            </div>
            </li>
        )
    }
}