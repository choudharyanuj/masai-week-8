import React, { createElement } from 'react';
let dish_name = [];
let quantity_arr = [];
let total_price = [];
let total = 0;
let price = 100
class Bill extends React.Component {
   
    data_entry = (e) => {
        // let sum = 0;

        let item_name = document.getElementById('item_name').value;
        let quantity = document.getElementById('quantity').value;
        dish_name.push(item_name);
        quantity_arr.push(quantity);
        total = quantity * price;
        // let offer = (total*15)/100;
        // total_price.push(total);
        // for(var i = 0; i < total_price.length; i++) {
        //     sum = sum + total_price[i]
        // }
        var item_d = document.createElement("p");   
        item_d.innerHTML = item_name;
        document.getElementById("dish").appendChild(item_d)

        var item_e = document.createElement("p");
        item_e.innerHTML = quantity;
        document.getElementById("number_of_dish").appendChild(item_e)  

        var item_d = document.createElement("p");
        item_d.innerHTML = (quantity * price);
        document.getElementById("total_of_n_dish").appendChild(item_d)    
        // console.log(sum)

        // var net_amount = document.createElement("p");
        // net_amount.innerHTML = sum;
        // document.getElementById("net_ammount").appendChild(net_amount)
    }
    net_amount = (e) => {
        let sum = 0;
        total_price.push(total);
        for (var i = 0; i < total_price.length; i++) {
            sum = sum + total_price[i]
        }
        alert(
           "Your Total Bill Ammount is :-" + " " + sum
        )
        console.log(sum)
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <select id = "item_name" className = "text-center">
                                    <option>Dum Aloo</option>
                                    <option>Dal Makhnni</option>
                                    <option>Bhatura</option>
                                    <option>Aloo Gobhi</option>
                                    <option>Tandoori Lamb Chops</option>
                                    <option>Pina Colada</option>
                                    <option>Mutton Korma</option>
                                    <option>Momos</option>
                                    <option>Butten Chicken</option>
                                    <option>Parathas</option>
                                    <option>Chicken Meals</option>
                                </select>
                            
                            </th>
                            <th scope="row"><input type="text" placeholder="Quantity" id="quantity" className="text-center"></input></th>
                        </tr>
                    </tbody>
                </table>
                <div className = "text-center">
                    <button onClick={() => this.data_entry()} className = "text-center">Submit</button>
                </div>
                    <div id = "show" className = "text-white text-center mt-5">
                        <hr style={{ border: "1px dashed red" }}></hr>
                        <h1>Your Bill Details</h1>
                        <div style = {{border: "2px solid white"}}>
                            <div className = "text-center text-dark bg-light"> 
                                <h1>Apna Dhaba</h1>
                                <p>Front of Form Mall<br/>Kormangla, Bengaluru <br/>Phone:- 0123456789</p>
                                <hr style = {{border: "1px dashed white"}}></hr>
                            </div>
                            <table className="table">
                                <thead className="thead-dark" >
                                    <tr>
                                        <th scope="col" id = "dish">Name of the item</th>
                                        <th scope="col" id = "number_of_dish">Quantity</th>
                                        <th scope="col" id = "total_of_n_dish"> Total</th>
                                    </tr>
                                </thead>
                            </table>
                            <button onClick={() => this.net_amount()} >Calculate Total</button>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default Bill;