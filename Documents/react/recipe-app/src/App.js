import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeDetails from './component/RecipeDetails';
import RecipeList from './component/RecipeList';
import {recipes} from './tempList';

class App extends Component {
  state={
    recipes:recipes,
    details_id:35382,
    pageIndex:1,
    value:"",
  base_url: "https://www.food2fork.com/api/search?key=f1a6e7e66339b94bf296dee31c53ca26",
   url:"https://www.food2fork.com/api/search?key=f1a6e7e66339b94bf296dee31c53ca26",
   error:""
   
  }
  async getRecipes() {
        try {
          const data = await fetch(this.state.url);
          const jsonData = await data.json();
          if(jsonData.recipes.length===0){
            this.setState(()=>{
            return ({error:"not return any results"});
            }

            );
          }else{
          this.setState(()=>{
           return {recipes: jsonData.recipes,
            error:""};
          }
          );
        }
          
        } catch (error) {
          console.log(error);
        }
      }
  componentDidMount(){
    this.getRecipes();
  }
handleChange=e=>{

  this.setState({
    value:e.target.value
  });
  }

handleSubmit=e=>{
  e.preventDefault();
  const {base_url,value}=this.state;
  this.setState(
    ()=>{
      return {url: `${base_url}&q=${value}`,
      value:""};
    },
    ()=>{
      this.getRecipes();
    }
    );

}
 handleIndex=index=>{
    this.setState({
      pageIndex: index
    })
 }
handleDetails=(index,id)=>{
  this.setState({
    pageIndex: index,
    details_id:id
  })
}
 displayPage(index){
   if(index){
     return (<RecipeList 
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      handleDetails={this.handleDetails}
      value={this.state.value}
      error={this.state.error}
       recipes={this.state.recipes}/>);
   }
   else return (<RecipeDetails 
    handleIndex={this.handleIndex} 
    details_id={this.state.details_id}/>);
 }

  render() {
   
    return (
      <React.Fragment>{this.displayPage(this.state.pageIndex)}
      </React.Fragment>
    )
  }
}
export default App;

