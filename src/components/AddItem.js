import React, { Component } from 'react';

class AddItem extends Component {

    state = {
        title: ''
    };


    onChange = e => {
        this.setState({
         [e.target.name]: e.target.value
        });
       };
     
       onSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.title);
        this.setState({
         title: ""
        });
       };
        
    
    render() {
        return (
         <form className="form-container" onSubmit={this.onSubmit} >
         <input type="text" placeholder="Type here ..." className="input-text" name="title" value={this.state.title} onChange={this.onChange}  />
         <input type="submit" value="Add " className="input-submit" />
         </form>
  );

 
        
    }
}

export default AddItem
