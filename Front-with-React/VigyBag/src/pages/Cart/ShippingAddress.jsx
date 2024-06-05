import React from "react";

export default function ShippingAddress() {
    return (
    <div className="w-3/5 m-auto">
    <div className="w-full flex flex-col items-center gap-10 basis-full">
        <section className="flex flex-col items-center gap-3 w-full ">
            <ul className="timeline">
                <li>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end">Cart</div>
                    <hr className="border-4 border-red-500"/>
                </li>
                <li>
                    <hr className="w-0 border-4 border-red-500"/>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end">Address</div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end">Payment</div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end">Confirmation</div>
                </li>
            </ul>
        </section>
        <section className="flex flex-col gap-10 w-full border-2 border-black box-border rounded-lg p-10">
                <div role="tablist" className="tabs tabs-boxed">
                    <button role="tab" className="tab focus:tab-active">Address </button>
                    <button role="tab" className="tab focus:tab-active">Add new Address</button>
                </div>
                <div className="flex flex-row justify-around basis-1/2">
                <section id="contact-details" className="flex flex-col gap-2 w-1/3">
                    <h3>CONTACT DETAILS</h3>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="name">Name</label>
                        <input className="bg-transparent border-2 border-black rounded-md" type="text" name="name" id="name" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Name</label>
                        <input className="bg-transparent border-2 border-black rounded-md" type="text" name="name" id="name" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Name</label>
                        <input className="bg-transparent border-2 border-black rounded-md" type="text" name="name" id="name" />
                    </div>
                </section>
                <section id="address"className="flex flex-col gap-2 w-1/3">
                <h3>CONTACT DETAILS</h3>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Name</label>
                        <input className="bg-transparent border-2 border-black rounded-md" type="text" name="name" id="name" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Name</label>
                        <input className="bg-transparent border-2 border-black rounded-md" type="text" name="name" id="name" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Name</label>
                        <input className="bg-transparent border-2 border-black rounded-md" type="text" name="name" id="name" />
                    </div>
                </section>
                </div>
        </section>
    </div>
    </div>)
}