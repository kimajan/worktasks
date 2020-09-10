import React, { Component } from 'react';
import '../styles/Header.css';
import Items from './Items';
import AddItem from './AddItem';
import { v4 as uuid } from 'uuid';
    
class Deployment extends Component {
        

    state = {
        items: [
            {
                id: uuid(),
                title: "Discuss any issues with testing team",
                completed: false
               },
               {
                id: uuid(),
                title: "Deploy app",
                completed: false
               },
               {
                id: uuid(),
                title: "Monitor performance of app",
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
                    <header className="dep-style">
                        
                        <h1>Deployment</h1>
                        
                    </header>

                    <AddItem addItem={this.addItem} />
  
                    <Items items={this.state.items} handleChange={this.handleChange} deleteItem={this.deleteItem} />

                </div>

            )
        }
    }
    
    export default Deployment
    