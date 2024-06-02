import React from "react";
import "./Item.css";

export default function Item() {
    return (<div className="rounded-lg shadow-md border-slate-400 border w-full p-3 flex flex-row gap-5">
        <img id="item-image" src="" className="h-32 max-h-full w-1/3 max-w-32 self-center"/>
        <div className="flex flex-col gap-2">
        <div>
        <h3 id="item-name" className="text-xl font-bold">Item name</h3>
        <p className="font-light text-xs">Sold by: <span id="seller-name" >Seller Name</span></p>
        </div>
        <p className="flex flex-row gap-2 items-center">Size:
            <select name="item-size" id="item-size" className="bg-inherit select select-sm select-bordered  w-full max-w-xs">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
        </p>
        <p>₹<span id="discount-price">275</span> <span id="actual-price" className="line-through">MRP ₹299</span> <span className="text-green-600 text-sm">(70% OFF)</span></p>
        <div id="quantity" className="flex flex-row gap-2">
            Quantity:
            <button id="decrement" className="btn btn-xs btn-outline"> - </button>
            <span id="item-quantity" >2</span>
            <button id="increment" className="btn btn-xs btn-outline">+</button>
        </div>
        </div>
    </div>);
}