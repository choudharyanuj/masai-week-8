import React, { createElement } from 'react';
let dish_name = [];
let quantity_arr = [];
let total_price = [];
let total = 0;
let price = 0;
class Bill extends React.Component {
   
    data_entry = (e) => {
        let item_name = document.getElementById('item_name').value;
        let quantity = document.getElementById('quantity').value;
      
        dish_name.push(item_name);
        quantity_arr.push(quantity);
        if(item_name === "Dum Aloo") {
            total = quantity * 25;
            price = 25;
        }
        if (item_name === "Dal Makhni") {
            total = quantity * 75;
            price = 75;
        }
        if (item_name === "Bhatura") {
            total = quantity * 40;
            price = 40;
        }
        if (item_name === "Aloo Gobhi") {
            total = quantity * 50;
            price = 50;
        }
        if (item_name === "Tandoori Lamb Chops") {
            total = quantity * 120;
            price = 120;
        }
        if (item_name === "Pina Colada") {
            total = quantity * 150;
            price = 150;
        }
        if (item_name === "Mutton Korma") {
            total = quantity * 250;
            price = 250;
        }
        if (item_name === "Momos") {
            total = quantity * 50;
            price = 50;
        }
        if (item_name === "Butter Chicken") {
            total = quantity * 300;
            price = 300;
        }
        if (item_name === "Parathas") {
            total = quantity * 20;
            price = 20;
        }
        if (item_name === "Chicken Meals") {
            total = quantity * 150;
            price = 150;
        }
        total = quantity * price;
        total_price.push(total);
        var item_d = document.createElement("p");   
        item_d.innerHTML = item_name;
        document.getElementById("dish").appendChild(item_d)

        var item_e = document.createElement("p");
        item_e.innerHTML = quantity;
        document.getElementById("number_of_dish").appendChild(item_e)  

        var item_d = document.createElement("p");
        item_d.innerHTML = (quantity * price);
        document.getElementById("total_of_n_dish").appendChild(item_d)       
    }
    customer_details = (e) => {
        let cus_name = document.getElementById('name').value;
        let date_ip = document.getElementById('date').value;
 
        var customer_name = document.createElement("p");
        customer_name.innerHTML = "Name" + " " + cus_name;
        document.getElementById("cus_name").appendChild(customer_name)

        var bill_date = document.createElement("p");
        bill_date.innerHTML = "Date" + " " + date_ip;
        document.getElementById("date_show").appendChild(bill_date)
    }
    net_amount = (e) => {
        let sum = 0;
        for (var i = 0; i < total_price.length; i++) {
            sum = sum + total_price[i]
        }
        // alert(
        //    "Your Total Bill Ammount is :-" + " " + sum
        // )
        var subtotal = document.createElement("p")
        subtotal.innerHTML = "Sub Total" + " " + sum;
        document.getElementById('total_bill').appendChild(subtotal);
        console.log(total_price)
        window.print();
       
    }

    render() {
        return (
            <div className = " Container mt-5">
                <div className = "row offset-5">
                    <input placeholder="Customer Name" className ="mt-5 col-3 float-right " id = "name"></input>
                    <input type="date" id = "date" className = "col-3 mt-5 ml-3 float-right"/>
                    <button onClick={() => this.customer_details()} className="mt-2 text-center col-6">Submit Details</button>
                </div>
                <div className = "row">
                    <div className = "mt-5 col-6">
                        <select id = "item_name" className = "text-center float-right">
                            <option>Dum Aloo</option>
                            <option>Dal Makhni</option>
                            <option>Bhatura</option>
                            <option>Aloo Gobhi</option>
                            <option>Tandoori Lamb Chops</option>
                            <option>Pina Colada</option>
                            <option>Mutton Korma</option>
                            <option>Momos</option>
                            <option>Butter Chicken</option>
                            <option>Parathas</option>
                            <option>Chicken Meals</option>
                        </select>
                    </div>
                    <div className = "col-6 mt-5">
                        <input type="text" placeholder="Quantity" id="quantity" className="text-center"></input>
                    </div>
                </div>
                <div className = "text-center">
                    <button onClick={() => this.data_entry()} className = "text-center mt-5">Submit</button>
                </div>
                    <div id = "show" className = "text-white text-center mt-5">
                        <hr style={{ border: "1px dashed red" }}></hr>
                        <h1>Your Bill Details</h1>
                        <div style = {{border: "2px solid white"}}>
                            <div className = "text-center text-dark bg-light"> 
                                <h1>Apna Dhaba</h1>
                                <p>Front of Form Mall<br/>Kormangla, Bengaluru <br/>Phone:- 0123456789</p>
                                <hr style = {{border: "1px dashed white"}}></hr>
                                <div className = "row">
                                    <div id="cus_name" className="col-6 float-left"></div>
                                    <div className = "col-6" id = "date_show"></div>
                                </div>
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
                            <div className = "text-dark" style ={{marginLeft: "1100px"}} id = "total_bill"></div>
                            <button onClick={() => this.net_amount()} >Generate Bill</button>
                        </div>
                    </div>
            </div>
            
        )
    }
}
export default Bill;