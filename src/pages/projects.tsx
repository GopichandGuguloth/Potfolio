import { motion } from "framer-motion";
import Secondbrain from "../Pictures/Screenshot (375).png";
import todo from "../Pictures/ppp3.jpg";
import weather from "../Pictures/ppp3.jpg";

interface ProjectProps {
  title: string;
  text: string;
  image: any;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
}

const projectList: ProjectProps[] = [
  {
    title: "Second Brain App",
   text: "A Second Brain application designed to store, organize, and retrieve important links, embedded YouTube videos, tweets, and documents. Built using the MERN stack with TypeScript and Tailwind CSS, it allows users to manage their digital knowledge efficiently and share it with others.",
    image: Secondbrain,
    tags: ["React", "Typescript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB" ],
    demoLink: "#",
    codeLink: "https://github.com/GopichandGuguloth/Second-Brain-Project",
  },
  {
    title: "---------",
    text: "-------------------------",
    image: todo,
    tags: [],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "--------",
    text: "-----------------",
    image: weather,
    tags: [],
    demoLink: "#",
    codeLink: "#",
  },
];

export function Projects() {
  return (
    <div className="py-16 px-6 md:px-20  text-center">
      <motion.h1
        className="text-4xl font-bold text-gray-900 mb-2"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h1>
      <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded"></div>
      <p className="text-gray-600 text-lg mb-12">
        Here are some of my recent projects that showcase my skills and experience
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image with overlay buttons */}
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-t-lg h-[180px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
                <a
                  href={project.demoLink}
                  target="_blank"
                  className="bg-white text-black font-medium px-4 py-2 rounded hover:bg-gray-200"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  className="bg-white text-black font-medium px-4 py-2 rounded hover:bg-gray-200"
                >
                  Code
                </a>
              </div>
            </div>

            {/* Card content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{project.text}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
