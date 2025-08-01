import { motion } from "framer-motion";
import profileImg from "../Pictures/ppp4.jpg"; // update to your image path
import { FaDownload } from "react-icons/fa";
import resume from "../files/Gopichand Guguloth Resume.pdf"

export function About() {
  return (
    <div className="min-h-screen px-6 md:px-[60px] pt-20 py-20   text-gray-900">
      {/* Section Title */}
      <motion.h1
        className="text-4xl font-extrabold text-center text-blue-600 mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={profileImg}
            alt="Gopichand"
            className="w-80 h-100 object-cover rounded-xl shadow-md"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="max-w-2xl text-center md:text-left"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">I'm Gopichand</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-6">
            I’m a Computer Science undergraduate at <strong>IIIT Kottayam</strong>, passionate about
            building scalable software solutions and improving my skills through real-world projects
            and competitive programming.
            With a solid foundation in <strong>Data Structures, Algorithms, Operating Systems,</strong> and
            <strong> DBMS</strong>, I'm currently focused on full-stack web development using the
            <strong> MERN stack</strong>.
            <br /><br />
            I’ve solved over <strong>500+ DSA problems</strong> on LeetCode and GeeksforGeeks, and
            regularly participate in contests on Codeforces. I love collaborating on impactful projects
            and constantly seek to grow as a developer and problem solver.
          </p>

          <a
            href={resume}
            download
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-900 text-white font-medium px-6 py-4 rounded-xl transition duration-300"
          >
            <FaDownload className="text-white" />
            Download CV
          </a>
        </motion.div>
      </div>
    </div>
  );
}
