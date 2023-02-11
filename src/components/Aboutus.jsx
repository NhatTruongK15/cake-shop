import React from 'react'
import {MdFacebook, MdSettingsPhone} from "react-icons/md"


const Aboutus = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <div className="w-[90%] md:w-[50%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
                <div className="text-4xl">OUR STORY</div>
                <p>
                The story of the world’s most famous bakery begins in 2020 on a quaint, cobblestone corner in the West Village where Magnolia Bakery opened its doors for the first time. The sweet smell of cakes and cookies and pies and pudding tumbled out, wafting down the streets, beckoning all in. <br></br>

Our red velvet cupcakes became iconic and people lined up around the block for our banana pudding. There was even talk of New York pretzel guys becoming cupcake guys. Serein Cake was a destination for locals and tourists alike.<br></br>

It was time for us to open the cupboards and share our magic with the world. Our neighborhood bakery found its way into new neighborhoods near and far, we wrote cookbooks and helped people all over celebrate their most important moments.<br></br>

And while we have grown, a few things will always remain: open early and close late, a dollop of buttercream makes everything better, and our mission: make today sweeter than yesterday.<br></br>
                </p>
                <div className="text-4xl">CONTACT WITH US</div>

                <div className="w-full flex flex-col md:flex-row items-center gap-3">
                    <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                        <MdFacebook className="text-blue-700 text-2xl" />
                        <a href="https://www.facebook.com/profile.php?id=100054886024519">https://www.facebook.com/cakeshop</a>
                    </div>


                    <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                        <MdSettingsPhone className="text-pink-700 text-2xl" />
                        <a href="">Hotline: 0909999999 </a>
                    </div>

                </div>
            </div>
            </div>
            )
}

            export default Aboutus
