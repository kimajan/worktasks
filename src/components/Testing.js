import React, { Component } from 'react'
import '../styles/Header.css';
import Items from './Items';
import AddItem from './AddItem';
import { v4 as uuid } from 'uuid';
    
class Testing extends Component {
        

    state = {
        items: [
            {
                id: uuid(),
                title: "Meeting on Thursday the 14th",
                completed: false
               },
               {
                id: uuid(),
                title: "Get unit testing designed",
                completed: false
               },
               {
                id: uuid(),
                title: "Implement testing",
                completed: false
               },
               {
                id: uuid(),
                title: "Identify issues",
                completed: false
               },
               {
                id: uuid(),
                title: "Work on fixing bugs",
                completed: false
               },
               {
                id: uuid(),
                title: "Implement subsequent testing",
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
                    <header className="testing-style">
                        
                        <h1>Testing</h1>
                        
                    </header>
                    
                    <AddItem addItem={this.addItem} />
  
                    <Items items={this.state.items} handleChange={this.handleChange} deleteItem={this.deleteItem} />

                </div>
            )
        }
    }
    
    export default Testing
    