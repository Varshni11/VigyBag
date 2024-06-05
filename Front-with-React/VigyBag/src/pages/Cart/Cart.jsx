import React from "react";
import "./Cart.css"
import "./Item/Item";
import Item from "./Item/Item";
import ItemSummary from "./ItemSummary/ItemSummary";
import { Link } from "react-router-dom";
import ShippingAddress from "./ShippingAddress";

export default function Cart(){
    return (<div className="grid lg:grid-cols-3 grid-cols-1 gap-12 mx-10 mt-10 h-11/12">
    <section id="cart" className=" flex flex-col lg:col-span-2 col-span-1 items-center gap-5 ">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        <Item />
        <Item />
        <Item />
    </section >
    <section id="order-total" className="col-span-1 flex flex-col items-center gap-5">
        <h2 className="text-2xl font-bold">Subtotal</h2>
        <div id="order-summary" className="box-border p-8 flex flex-col flex-wrap gap-2 rounded-lg border shadow-md border-slate-400 w-full max-w-96 p-3">
            <h3 className="text-xl font-bold self-center">Order</h3>
            <ul className="list-disc list-inside mt-8">
               <ItemSummary name="Exhaustive surf excel powder and rin powder" quantity="2" price="100"/>
               <ItemSummary name="item2" quantity="2" price="200"/>
               <ItemSummary name="item3" quantity="2" price="300"/>
               <ItemSummary name="item4" quantity="2" price="400"/>
            </ul>
            <h3 className="mt-2 text-xl font-bold flex flex-row justify-between pl-5">Total: <span>₹1000</span></h3>
            <Link to="/shippingAddress" className="self-center"><button className="btn mt-5 btn-success text-white">Check - out</button></Link>
        </div>
    </section>
    
    
    </div>);
}