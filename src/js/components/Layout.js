import React from "react";
import Title from "./Title.js";
import Input from "./Input.js";


export default class Layout extends React.Component{
  constructor(){
    super();
    this.state = {
      title : "HOLO"
    }
  }

  changeTitle(title){
   this.setState({title});

  }
  render(){

    const title = "HOLO";

    return(
      <div class = "container">
        <div class = "row">
        <div class = "col s3"></div>
        <div class = "col s4">
          <div class = "jumbotron">
            <h1 class="display-3"><Title title={this.state.title}></Title></h1>
            <p class="lead">Type on the input box to change the title</p>
            <hr class="my-4"/>
          </div>
          </div>
          <div class = "col s3"></div>
        </div>
        <div class = "row"></div>
        <div class = "row">
          <div class = "col s3"></div>
          <div class = "col s4">
            <Input changeTitle={this.changeTitle.bind(this)}></Input>
          </div>
          <div class = "col s3"></div>
        </div>
        <div class = "row"></div>
        <div class = "row">
        <div class = "col s2"></div>
          <div class = "col s4">
          <a type="button" class="btn btn-primary" href = "/#/L2">L2</a>
          </div>
        </div>
        <div class = "row"></div>
        <div class = "row"></div>
        <div class = "row">
        <div class = "col s2"></div>
          <div class = "col s4">
          <a type="button" class="btn btn-primary" href = "/#/L3">L3</a>
          </div>
        </div>
      </div>


    );
  }

}
