import React from 'react';
// import './App.css';
let dish_name = [];
let quantity_arr = [];
let rate_arr = [];
let total_price = [];
let total = 0;

class Bill extends React.Component {
   
    data_entry = (e) => {
        let sum = 0;
        let item_name = document.getElementById('item_name').value;
        let quantity = document.getElementById('quantity').value;
        let rate = document.getElementById('rate').value;
        dish_name.push(item_name);
        quantity_arr.push(quantity);
        rate_arr.push(rate);
        total = quantity * rate;
        total_price.push(total);
        // console.log(dish_name);
        // console.log(quantity_arr);
        // console.log(rate_arr);
        // console.log(total_price);
        // console.log(total); 
        for(var i = 0; i < total_price.length; i++) {
            sum = sum + total_price[i]
        }
        alert(
            "Yor Odrde Was :-" + " " + item_name + " " + "Your Total Bill Ammount is :-" + " " + sum
        )
        console.log(sum); 
    }
    render() {
        return (
            <div className = " Container mt-5">
            <div className= "table-size bg-image">
            <table className="table mt-5 table-size">
                        <thead className="thead-dark mt-5 table-size" >
                    <tr>
                        <th scope="col">Name of the item</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Rate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope = "row"><input type = "text" placeholder = "Item name" id = "item_name"></input></th>
                        <th scope = "row"><input type = "text" placeholder = "Quantity" id = "quantity"></input></th>
                        <th scope = "row"><input type = "text" placeholder = "Rate" id = "rate"></input></th>
                    </tr>
                </tbody>
            </table>
            <div className = "text-center">
                <button onClick={() => this.data_entry()} className = "text-center">Submit</button>
            </div>
            </div>
            </div>
            
        )
    }
}
export default Bill;