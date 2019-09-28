import React from 'react';
// import './App.css';
class Bill extends React.Component {
     data_entry = () => {
            let data = [];
            let item_name = document.getElementById('item_name').value;
            let quantity = document.getElementById('quantity').value;
            let rate = document.getElementById('rate').value;
            let total = document.getElementById('total').value;
            data.push(item_name);
            data.push(quantity);
            data.push(rate);
            data.push(total);
}
    render() {
        return (
            <div className = "table-size">
            <table className="table mt-5">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name of the item</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope = "row"><input type = "text" placeholder = "Item name" id = "item_name"></input></th>
                        <th scope = "row"><input type = "text" placeholder = "Quantity" id = "quantity"></input></th>
                        <th scope = "row"><input type = "text" placeholder = "Rate" id = "rate"></input></th>
                        <th scope="row"><input type="text" placeholder="Total" id="total"></input></th>
                    </tr>
                </tbody>
            </table>
                <button onClick={() => this.data_entry()}>Submit</button>
            </div>
        )
    }
}
export default Bill;