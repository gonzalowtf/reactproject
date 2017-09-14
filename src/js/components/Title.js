import React from "react";

export default class Title extends React.Component{
  constructor(){
    super();

}

  render(){

    return(
        <h1><center>{this.props.title}</center></h1>
        
    );
  }

}
