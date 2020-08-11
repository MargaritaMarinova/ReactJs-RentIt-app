import React, { Component } from 'react'
import styles from './index.module.css'
import ItemCard from '../item'
import axios from '../../axios-order'


class ItemList extends Component {
    state={
        items: []
    }
   
  componentDidMount () {
   axios.get('/items.json')
    .then(res => {
        const fetchedItems=[];
        for (let key in res.data) {
            fetchedItems.push({
                ...res.data[key],
                id: key
            });
        }
        this.setState({items: fetchedItems})
        
       }).catch(err=> {
           console.log(err)
       })
    }
    

    render() {
    return(
            <div>
                {this.state.items.map(item => (
                    <ItemCard 
                    key = {item.id}
                    imageUrl = {item.imageUrl}
                    name = {item.name}
                    description = {item.description}
                    price = {item.price}
                    />
                ))}
            </div>
        )
    }
}

export default ItemList
    