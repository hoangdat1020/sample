import React, { Component } from 'react'
import './App.css';
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from "uuid";

class App extends Component {
  state={
    items:[],
    item:"",
    id: uuid(),
    editItem:false

  }
  handleChange=e=>{
    this.setState({
    item : e.target.value
    });
  }
  handleSubmit=e=>{
    e.preventDefault();
  
    const newItem={
      id:this.state.id,
      title:this.state.item
    }
    const updatedItems=[...this.state.items,newItem];
    this.setState({
      items: updatedItems,
      item:'',
      id: uuid(),
      editItem:false,
      
    });
   
  }
  clearList(){
    this.setState({
      items:[]
    })
  }
  handleDelete=id=>{
    const filterArr=this.state.items.filter(item=> item.id!==id);
    //const filted=this.state.items.find(item=>item.id===id);
    this.setState({
      items:filterArr,
     
    });
  }
  handleEdit=id=>{
    const filtedItem=this.state.items.find(item=>item.id===id);
    const filterArr=this.state.items.filter(item=> item.id!==id);
    this.setState({
      items:filterArr,
      item:filtedItem.title,
      id:id,
      editItem:true
     
    });

  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
         <h3 className="text-center">Todo Input</h3>
          <TodoInput editState={this.state.editItem} item={this.state.item} handleChange={this.handleChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
          />
           <TodoList
           handleEdit={this.handleEdit.bind(this)}
           handleDelete={this.handleDelete.bind(this)}
           items={this.state.items} clearList={this.clearList.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }
}
export default App;