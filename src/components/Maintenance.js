import React, { Component } from 'react';
import '../styles/Header.css';
import Items from './Items';
import AddItem from './AddItem';
import { v4 as uuid } from 'uuid';
    
class Maintenance extends Component {
        

    state = {
        items: [
            {
                id: uuid(),
                title: "Meeting with client at 12:30pm",
                completed: false
               },
               {
                id: uuid(),
                title: "Discuss maintenance plans",
                completed: false
               },
               {
                id: uuid(),
                title: "Perform agreed-upon maintenance duties",
                completed: false
               },
               {
                id: uuid(),
                title: "Follow up on ad-hoc requests",
                completed: false
               },
              ]
    };
    
    handleChange = id => {
        this.setState({
         items: this.state.items.map(item => {
          if (item.id === id) {
           item.completed = !item.completed;
          }
          return item;
         })
        }); 
       };
       
    deleteItem = id => {
        this.setState({
        items: [
            ...this.state.items.filter(item => {
                return item.id !== id;
           })
          ]
        });
       };
         
    
    addItem = title => {
        const newItem = {
         id: uuid(),
         title: title,
         completed: false
        };
        this.setState({
         items: [...this.state.items, newItem]
        });
    };
    

        render() {
            return (
                <div>
                    <header className="maintenance-style">
                        
                        <h1>Maintenance</h1>
                        
                    </header>

                    <AddItem addItem={this.addItem} />
  
                    <Items items={this.state.items} handleChange={this.handleChange} deleteItem={this.deleteItem} />

                </div>                    

            )
        }
    }
    
    export default Maintenance
    