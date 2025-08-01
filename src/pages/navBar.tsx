import { Link } from "react-router-dom";


export function Navbar() {
    return (

        <div className=" bg-white  h-27 border-gary-300 shadow-blue-100  shadow-lg justify-content gap-115 items-center flex rounded-lg ">
            <div className="  items-center text-3xl pl-30"><b>Gopichand Guguloth</b></div>
            <div className=" items-center text-2xl text-gray-500 gap-20 flex ">
                <div>
                    <Link to="/"
                        className="relative inline-block font-bold text-gray-500 
                        after:content-[''] after:block after:w-0 after:h-[5px] after:bg-blue-500
                        after:transition-all after:duration-300 after:mt-5 hover:after:w-full">
                        Home
                    </Link>
                </div>
                <div><Link to="/about"
                        className="relative inline-block font-bold text-gray-500  
                        after:content-[''] after:block after:w-0 after:h-[5px] after:bg-blue-500 
                        after:transition-all after:duration-300 after:mt-5 hover:after:w-full">
                        About
                    </Link></div>
                <div><Link to="/skills"
                        className="relative inline-block font-bold text-gray-500  
                        after:content-[''] after:block after:w-0 after:h-[5px] after:bg-blue-500
                        after:transition-all after:duration-300 after:mt-5 hover:after:w-full">
                        Skills
                    </Link></div>
                <div><Link to="/projects"
                        className="relative inline-block font-bold text-gray-500  
                        after:content-[''] after:block after:w-0 after:h-[5px] after:bg-blue-500
                        after:transition-all after:duration-300 after:mt-5 hover:after:w-full">
                        Projects
                    </Link></div>
                <div><Link to="/contact"
                        className="relative inline-block font-bold text-gray-500  
                        after:content-[''] after:block after:w-0 after:h-[5px] after:bg-blue-500
                        after:transition-all after:duration-300 after:mt-5 hover:after:w-full">
                        Contact
                    </Link></div>
            </div>
        </div>

    );
}