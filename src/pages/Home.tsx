
import { GithubIcon } from "../icons/gitHub";
import { LinkedIn } from "../icons/linkedIn";
import image1 from "../Pictures/ppp4.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import resume from "../files/Gopichand Guguloth Resume.pdf"


export function Home() {
  return (
   <div className=" ">
     <div className="flex  pt-10 ">
    
      <motion.div
        className="h-screen pt-10"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-6xl pt-20 pl-50 leading-relaxed">
          <b>Hi,</b>
          <br />
          <b>I'm </b><b className=" text-blue-600 ">Gopichand</b>
          <br />
          <b>Full-Stack Web Developer</b>
        </div>

        <div className="pl-50 pt-4 flex gap-5">
         <Link to="/contact"> <button className="text-2xl py-4 text-white bg-blue-600 hover:bg-blue-900 transition-all duration-300 px-8  cursor-pointer rounded-[16px]">
            Contact me
          </button>
          </Link>
          <a
            href={resume}
            download
            className="inline-flex items-center gap-2 bg-white hover:bg-blue-100 text-blue-700 border-blue-500 border-3 font-medium px-6 py-4 rounded-xl transition duration-300"
          >
            <FaDownload className="text-blue-600" />
            Download CV
          </a>
        </div>

        <div className="pl-50 pt-10 flex gap-5 text-red-900 opacity-[0.4] text-3xl">
          <a href="https://github.com/GopichandGuguloth"><GithubIcon /></a>
          <a href="https://www.linkedin.com/in/guguloth-gopichand-a1224a35b/"><LinkedIn /></a>
        </div>
      </motion.div>

    
      <motion.div
        className="pt-20 pl-50"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src={image1}
          alt="Gopichand"
          className="rounded-full w-100 h-100 object-cover shadow-xl border-4 border-white"
        />
      </motion.div>
    </div>
   </div>
  );
}
