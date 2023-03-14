import React from "react";

const Footer = () => {
    return (
        <>
            <div className="font-poppins font-normal px-8">
                <div className="bg-primary mb-0 mt-5">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid gird-cols-1 sm:grid-cols-3 gap-4">
                            {/* First column */}
                            <div className="mb-5 text-white ">
                                <h4 className="text-2xl pb-4">Pages</h4>
                                <ul className="list-none">
                                    <li className="mb-2">Home</li>
                                    <li className="mb-2">About</li>
                                    <li className="mb-2">Connect</li>
                                    <li className="mb-2">Find Us</li>
                                </ul>
                            </div>
                            {/* Second column */}
                            <div className="mb-5 text-white ">
                                <h4 className="text-2xl pb-4">Company</h4>
                                <ul className="list-none">
                                    <li className="mb-2">123 Street Name</li>
                                    <li className="mb-2">City, State 123546</li>
                                    <li className="mb-2">(555)-555-5555</li>
                                    <li className="mb-2">
                                        <a href="mailto:example@mail.com">example@mail.com</a>
                                    </li>
                                </ul>
                            </div>
                            {/* Third column */}
                            <div className="mb-5 text-white text-center sm:text-left">
                                <h4 className="text-2xl pb-4">Join Our Newsletter</h4>
                                <form>
                                    <input
                                        type="text"
                                        className="text-white w-2/3 p-2 focus:border-[#d39e2c6f] rounded-md"
                                        name=""
                                        id=""
                                        placeholder="email@mail.com"
                                    />
                                    <br />
                                    <button className="bg-[#d39e2c6f] hover:bg-[#d39e2cc5] text-white p-2 mt-4 w-1/3 rounded-md">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Lower section of footer */}
            <div className="w-full bg-inherit text-gray-400 p-3 px-[4%] border-y-2 border-[#d39e2c6f]">
                <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
                    <div className="text-center">
                        <div>Copyright &copy; {new Date().getFullYear()} Company Name</div>
                        <div>Designed by Name</div>
                    </div>
                    {/* Social links */}
                    <div className="text-center text-xl text-white mb-2">
                        {/* Should use an icons library for social icons */}
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-[#d39e2c6f] hover:bg-[#d39e2cc5] mx-1 inline-block pt-1">
                            FB
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-[#d39e2c6f] hover:bg-[#d39e2cc5] mx-1 inline-block pt-1">
                            TW
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-[#d39e2c6f] hover:bg-[#d39e2cc5] mx-1 inline-block pt-1">
                            IG
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
