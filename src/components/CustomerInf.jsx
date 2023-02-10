import React, { useState,useStateValue } from 'react'
import { motion } from 'framer-motion'
import { MdDriveFileRenameOutline, MdLocationOn, MdPhoneAndroid, MdAlternateEmail } from 'react-icons/md';

import { Link } from 'react-router-dom';
import CartContainer from './CartContainer';


const CustomerInf = () => {
    const [name, setName] = useState("");
    const [add, setAdd] = useState("");
    const [num, setNum] = useState("");
    const [email, setMail] = useState("");
    const [{ cartShow }, dispatch] = useStateValue();

    const clearData = ()=>{
        setName("");
        setAdd("");
        setNum("");
        setMail("");
    };

    const reset = ()=> {
        clearData();
    };

    return (

        
        <div className="w-full min-h-screen flex items-center justify-center">           
            <div className="w-[90%] md:w-[50%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4" id="form">
                <div className="text-2xl">Customer Information</div>
                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                    <MdDriveFileRenameOutline className="text-xl text-gray-700">
                    </MdDriveFileRenameOutline>

                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full name"
                        className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                    />
                </div>

                <div className="w-full">
                    <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                        <MdLocationOn className="text-xl text-gray-700" />
                        <input
                            type="text"
                            required
                            value={add}
                            onChange={(e) => setAdd(e.target.value)}
                            placeholder="Address"
                            className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                        />
                    </div>
                </div>
                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                    <MdPhoneAndroid className="text-xl text-gray-700" />
                    <input
                        type="text"
                        required
                        value={num}
                        onChange={(e) => setNum(e.target.value)}
                        placeholder="Number phone:"
                        className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                    />
                </div>


                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                    <MdAlternateEmail className="text-xl text-gray-700" />
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setMail(e.target.value)}
                        placeholder="Email:"
                        className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                    />
                </div>

                <div className="flex items-center w-full">
            
                    
                   <Link to="/payment">

                    <button
                        type="button"
                        className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
                        onClick={reset}
                    >
                        Confirm
                    </button>                   
                   </Link>
                </div>
            </div>

            {/* {cartShow && <CartContainer />} */}
        </div>
    )
}

export default CustomerInf
