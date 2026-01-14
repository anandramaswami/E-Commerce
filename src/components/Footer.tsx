

function Footer() {
    return (
        <footer className="bg-[#1d1501] pt-10 flex flex-col items-center overflow-hidden px-4">
            <div className="w-full sm:w-[80%] md:w-[50%] lg:w-[30%]">
                <p className="text-white text-center font-semibold text-sm sm:text-base">SUBSCRIBE TO OUR NEWSLETTER</p>
                <div className="bg-white mt-3 flex flex-col sm:flex-row justify-between rounded-xl overflow-hidden">
                    <input type="email" placeholder="Email" className="px-5 py-2 focus:outline-0 w-full text-sm sm:text-base" />
                    <button className="bg-amber-300 px-6 py-2 font-medium hover:bg-amber-400 transition text-sm sm:text-base">Subscribe</button>
                </div>
            </div>

            <div className="w-full mt-12 sm:mt-16 text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4 sm:px-6 md:px-20">
                <div>
                    <h1 className="text-base sm:text-lg md:text-xl font-bold">CUSTOMER CARE</h1>
                    <div className="mt-3 flex flex-col gap-2 text-xs sm:text-sm md:text-base">
                        <h3>CONTACT US - 8085065848</h3>
                        <h3>FAQ</h3>
                        <h3>TRACK YOUR ORDERS</h3>
                        <h3>RETURN POLICY</h3>
                        <h3>SHIPPING INFO</h3>
                    </div>
                </div>

                <div>
                    <h1 className="text-base sm:text-lg md:text-xl font-bold">OUR COMPANY</h1>
                    <div className="mt-3 flex flex-col gap-2 text-xs sm:text-sm md:text-base">
                        <h3>ABOUT US</h3>
                        <h3>CAREERS</h3>
                    </div>
                </div>

                <div>
                    <h1 className="text-base sm:text-lg md:text-xl font-bold">LEGAL AREA</h1>
                    <div className="mt-3 flex flex-col gap-2 text-xs sm:text-sm md:text-base">
                        <h3>TERMS AND CONDITIONS</h3>
                        <h3>PRIVACY POLICY</h3>
                        <h3>CONDITIONS OF SALE</h3>
                        <h3>CREDITS</h3>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-base sm:text-lg md:text-xl font-bold">FOLLOW US</h1>
                    <div className="flex gap-5">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="w-5 h-5 sm:w-6 sm:h-6 hover:scale-110 transition cursor-pointer" />
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" className="w-5 h-5 sm:w-6 sm:h-6 hover:scale-110 transition cursor-pointer" />
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" className="w-5 h-5 sm:w-6 sm:h-6 hover:scale-110 transition cursor-pointer" />
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" className="w-5 h-5 sm:w-6 sm:h-6 hover:scale-110 transition cursor-pointer" />
                    </div>
                </div>
            </div>

            <div className="mt-8 sm:mt-10">
                <p className="text-center p-5 text-white text-xs sm:text-sm">© 2025 E-Commerce. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
