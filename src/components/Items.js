import React, { Component } from 'react';
import WorkItem from './WorkItem';

class Items extends Component {
    render() {
        return (
            <div>
                {this.props.items.map(item => (
                    <WorkItem key={item.id} item={item} handleChange={this.props.handleChange} deleteItem={this.props.deleteItem} />
                ))}

            </div>
        )
    }
}

export default Items
