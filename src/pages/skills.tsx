import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaLaptopCode,
} from "react-icons/fa";

export function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      icon: <FaLaptopCode className="text-blue-600 text-xl" />,
      items: [
        { name: "C++", level: 95 },
        { name: "C", level: 95 },
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 80 },
      ],
    },
    {
      category: "Frontend",
      icon: <FaCode className="text-blue-600 text-xl" />,
      items: [
        { name: "React", level: 90 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      category: "Backend",
      icon: <FaServer className="text-blue-600 text-xl" />,
      items: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
      ],
    },
    {
      category: "Data Structures & Algorithms",
      icon: <FaLaptopCode className="text-blue-600 text-xl" />,
      items: [
        { name: "Problem Solving", level: 85 },
        { name: "Algorithm Design", level: 80 },
        { name: "Competitive Programming", level: 75 },
        { name: "500+ Problems Solved", level: 90, static: true },
      ],
    },
    {
      category: "Database",
      icon: <FaDatabase className="text-blue-600 text-xl" />,
      items: [
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
      ],
    },
    {
      category: "Tools & Technologies",
      icon: <FaTools className="text-blue-600 text-xl" />,
      items: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
      ],
    },
  ];

  return (
    <div className="pt-10">
      <div className="min-h-screen px-6 md:px-[60px] py-20 text-gray-900 bg-white">
        {/* Title */}
        <motion.h1
          className="text-4xl font-extrabold text-center mb-12  border-blue-600 w-fit mx-auto pb-2"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h1>

        {/* Skill Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-[1.01] transition-all"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {skillGroup.icon}
                <h2 className="ml-3 text-xl font-semibold text-gray-800">
                  {skillGroup.category}
                </h2>
              </div>
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      {!skill.static && (
                        <span className="text-sm font-medium text-gray-500">
                          {skill.level}%
                        </span>
                      )}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        className={`bg-blue-600 h-3 rounded-full ${
                          skill.static ? "w-full" : ""
                        }`}
                        initial={{ width: 0 }}
                        animate={{
                          width: skill.static
                            ? "100%"
                            : `${skill.level}%`,
                        }}
                        transition={{ duration: 0.5 }}
                      ></motion.div>
                    </div>
                    {skill.name === "500+ Problems Solved" && (
                      <p className="text-xs text-gray-500 mt-1">
                        LeetCode, GeeksforGeeks, Codeforces
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Competencies */}
        <motion.div
          className="mt-16 bg-white rounded-xl shadow-md p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Additional Competencies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Responsive Design",
              "UI/UX Principles",
              "OOPS Concepts",
              "Linux Environment",
              "Debugging",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 p-4 rounded-lg text-center hover:bg-blue-100 transition-colors"
                whileHover={{ scale: 1.03 }}
              >
                <span className="block text-gray-700 font-medium">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
