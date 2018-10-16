import React from 'react';


const AddItem = (props) => {
  return (
    <div>
        <div>
            <div>
                Total: 
            </div>
            <div>
                $ {props.total}
            </div>
        </div>
        <form>
            <label>Quantity</label>
            <input type="number" onChange={props.handleChangeQty}></input>
            <label>products</label>
            <select id={props.price} value={props.value} onChange={props.handleChange}>
                {props.products.map((item) => <option id={item.priceInCents}>{item.name}</option>)}
            </select>
            <input type="submit" onClick={(e) => props.handleClick(e)}></input>
        </form>
    </div>
  )
}

export default AddItem