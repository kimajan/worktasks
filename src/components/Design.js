import React, { Component } from 'react';
import '../styles/Header.css';
import Items from './Items';
import AddItem from './AddItem';
import { v4 as uuid } from 'uuid';
    
class Design extends Component {   

    state = {
        items: [
            {
                id: uuid(),
                title: "Meeting at 9:30 am",
                completed: false
               },
               {
                id: uuid(),
                title: "Design the UI of the new web app",
                completed: false
               },
               {
                id: uuid(),
                title: "Design visuals",
                completed: false
               },
               {
                id: uuid(),
                title: "Design components",
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
                    <header className="design-style">
                        
                        <h1>Design</h1>
                        
                    </header>

                    <AddItem addItem={this.addItem} />
  
                    <Items items={this.state.items} handleChange={this.handleChange} deleteItem={this.deleteItem} />

                    </div>
            )
        }
    }
    
    export default Design
    