import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/CartHeader'
import CartFooter from './components/CartFooter'
import CartItems from './components/CartItems'
import CartItem from './components/CartItem'
import AddItem from './components/AddItem'


class App extends Component {

  constructor (props) {
    super();
    this.state ={
      cartItemsList : [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ] ,
      counter : 0,
      quantity : 0,
      price : 0,
      copyright : "2016",
      total : 33.96,
      value : "",
      products : [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ]
    }
    this.handleChange.bind(this);
  }


  handleChange = (event) => {
    this.setState({value: event.target.value});
    this.setState({price: event.target.id});
  }
  handleChangeQty = (event) => {
    this.setState({quantity: event.target.value});
  }

  handleClick = (e) => {
    e.preventDefault();
    const price = this.state.products.filter( product => {
      if (this.state.value === product.name){
        return product.priceInCents
      }
    })
    var newItem = {
      id: this.state.cartItemsList.length + 1,
      product: {
        id: 40,
        name: this.state.value,
        priceInCents: price[0].priceInCents
       },
      quantity: this.state.quantity
     }
     var newTotal = ((this.state.quantity)*(price[0].priceInCents))/100
    this.setState({total: this.state.total + newTotal});
    this.setState({
      cartItemsList: [...this.state.cartItemsList, newItem]
    })
  } 
  // handleClick = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     counter : ++this.state.counter
  //   })
  //   console.log(e.currentTarget.id)
  // } 
  

  render() {
    return (
      <div>
        <Greeting />
        <CartItems cartItemsList={this.state.cartItemsList}/>
        <AddItem products={this.state.products} handleClick={this.handleClick} handleChange={this.handleChange} value={this.state.value} handleChangeQty={this.handleChangeQty} total={this.state.total}/>
        <CartFooter copyright={this.state.copyright} />
      </div>
    )
  }
}

export default App;
