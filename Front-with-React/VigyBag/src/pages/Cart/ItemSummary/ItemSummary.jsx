import React from "react";
import "./ItemSummary.css";

export default function ItemSummary(props){
    return (
     <div className="flex flex-row justify-start gap-2">
        <div className="w-full flex flex-row justify-start gap-0">
        <span className="list-item gap-0"></span>
        <span > {props.name} </span>
        </div>
        <span className="shrink-0"> x {props.quantity}</span>
        <span> ₹{props.price}</span>
     </div>
    );
}