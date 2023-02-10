import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MdDriveFileRenameOutline, MdLocationOn, MdPhoneAndroid, MdAlternateEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import CartContainer from './CartContainer';
import { useStateValue } from "../context/stateProvider";
import CartItem from './CartItem';

const Payment = () => {
    const [name, setName] = useState("");
    const [add, setAdd] = useState("");
    const [num, setNum] = useState("");
    const [email, setMail] = useState("");

    const [{ cartShow }, dispatch] = useStateValue();
    const [fields, setFields] = useState(false);
    const [alertStatus, setAlertStatus] = useState("danger");
    const [msg, setMsg] = useState(null);

    const clearData = ()=>{
        setName("");
        setAdd("");
        setNum("");
        setMail("");
    };

    const reset = ()=> {
        setFields(true);
        setMsg("Thank you for your order 😊");
        setAlertStatus("success");
        clearData();
    };

    return (

        
        <div className="w-full min-h-screen flex items-center justify-center">           
            <div className="w-[90%] md:w-[50%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4" id="form">
                
                <div className="text-2xl">Customer Information</div>

                {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
              }`}
          >
            {msg}
          </motion.p>
        )}
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
                                                         
                    <button
                        type="button"
                        className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
                        onClick={reset}
                    >
                        Confirm
                    </button>                 
                </div>
            </div>
            {<CartContainer/> && <CartItem/> && cartShow }
        </div>
    )
}

export default Payment
