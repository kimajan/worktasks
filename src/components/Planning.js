import React, { Component } from 'react';
import '../styles/Header.css';
import Items from './Items';
import AddItem from './AddItem';
import { v4 as uuid } from 'uuid';

    
class Planning extends Component {
        
    state = {
        items: [
            {
                id: uuid(),
                title: "Meeting at 8:00 am",
                completed: false
               },
               {
                id: uuid(),
                title: "Review and discuss requirements",
                completed: false
               },
               {
                id: uuid(),
                title: "Plan the architecture of the project",
                completed: false
               },
               {
                id: uuid(),
                title: "Identify teams",
                completed: false
               },
               {
                id: uuid(),
                title: "Plan task division",
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
                    <header className="planning-style">
                        
                        <h1>Planning</h1>
                        
                    </header>
                    
                    <AddItem addItem={this.addItem} />
  
                    <Items items={this.state.items} handleChange={this.handleChange} deleteItem={this.deleteItem} />

                </div>
            )
        }
    }
    
    export default Planning
    