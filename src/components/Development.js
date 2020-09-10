import React, { Component } from 'react';
import '../styles/Header.css';
import Items from './Items';
import AddItem from './AddItem';
import { v4 as uuid } from 'uuid';
    
class Development extends Component {
        

    state = {
        items: [
            {
                id: uuid(),
                title: "Meeting with the UI team on Tuesday the 12th",
                completed: false
               },
               {
                id: uuid(),
                title: "Translate UI requirements into front-end specs",
                completed: false
               },
               {
                id: uuid(),
                title: "Start development of front-end",
                completed: false
               },
               {
                id: uuid(),
                title: "Work on the back-end development",
                completed: false
               },
               {
                id: uuid(),
                title: "Hold a cross-functional team meeting",
                completed: false
               },
               {
                id: uuid(),
                title: "Identify potential issues",
                completed: false
               },
               {
                id: uuid(),
                title: "Assign responsibilities to fix issues",
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
                    <header className="dev-style">
                        
                        <h1>Development</h1>
                        
                    </header>
                    
                    <AddItem addItem={this.addItem} />
  
                    <Items items={this.state.items} handleChange={this.handleChange} deleteItem={this.deleteItem} />

                </div>

            )
        }
    }
    
    export default Development
    