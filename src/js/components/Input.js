import React from "react";

export default class Input extends React.Component{
  constructor(){
    super();
      }
  //  handleChange(e) {
    //  const title = e.target.value;
    //  this.state.changeTitle(name);
    //}
    handleChange(e){
      const title = e.target.value;
      this.props.changeTitle(title);
    }
  render(){
    return(
    <div class="input-group">
      <span class="input-group-btn">
        <button class="btn btn-secondary" type="button">Go!</button>
      </span>
    <input type="text" class="form-control" onChange = {this.handleChange.bind(this)} aria-label="Search for..."/>
    </div>
    );
  }

}
