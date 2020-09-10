import React, { Component } from 'react';
    
    class WorkItem extends Component {
        render() {

            const { completed, id, title } = this.props.item

            const completedStyle = {
                fontStyle: "italic",
                color: "#c5e2d2",
                textDecoration: "line-through"
            };
  
 
               return (
                <li className="work-item">
                    
                 <input
                  type="checkbox"
                  checked={completed}
                  onChange={() => this.props.handleChange(id)}
                 />
                 <span style={completed ? completedStyle : null}>
                  {title}
                </span>
                       
                 <button className="button-style" onClick={() => this.props.deleteItem(id)}> X </button>


                </li>
               );
               
        }
    }
    
    export default WorkItem
    