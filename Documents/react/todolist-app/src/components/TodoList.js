import React, { Component } from 'react'
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
    
    render() {
        const {items,clearList,handleDelete,handleEdit}=this.props;
        return (
            <div className="card card-body mt-5">
            <ul className="list-group mb-3">
                <h3 className="text-center">Todo List</h3>
                   {items.map(item=>
                   <TodoItem
                   handleEdit={()=>{handleEdit(item.id)}}
                   handleDelete={()=>{handleDelete(item.id)}} key={item.id} title={item.title} />)}
            </ul>
            <button onClick={clearList} type="submit" className="text-center btn-block btn btn-danger">Clear List</button>
            </div>
           
            
        );
    }
}
