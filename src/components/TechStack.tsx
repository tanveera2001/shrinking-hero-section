"use client";

import { useState } from "react"


type Tool = {
  name: string
  exp: string
  image: string
  category: string
}

const tools: Tool[] = [
  {
    name: "Next.js",
    exp: "1 year",
    image: "images/tools-technologies/1753468137263-nextjs.png",
    category: "frontend",
  },
  {
    name: "TypeScript",
    exp: "1 year",
    image: "images/tools-technologies/1753468137232-typescript.png",
    category: "frontend",
  },
  {
    name: "JavaScript",
    exp: "3 years",
    image: "images/tools-technologies/1753468137250-javascript.png",
    category: "frontend",
  },
  {
    name: "Express.js",
    exp: "2 years",
    image: "images/tools-technologies/1753468137251-expressjs.png",
    category: "backend",
  },
  {
    name: "Node.js",
    exp: "3 years",
    image: "images/tools-technologies/1753468137252-nodejs.png",
    category: "backend",
  },
  {
    name: "React",
    exp: "2 years",
    image: "images/tools-technologies/1753468137253-react.png",
    category: "frontend",
  },
  {
    name: "HTML5",
    exp: "3 years",
    image: "images/tools-technologies/1753468137254-html5.png",
    category: "frontend",
  },
  {
    name: "CSS3",
    exp: "3 years",
    image: "images/tools-technologies/1753468137255-css3.png",
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    exp: "2 years",
    image: "images/tools-technologies/1753468137256-tailwindcss.png",
    category: "frontend",
  },
  {
    name: "MongoDB",
    exp: "3 years",
    image: "images/tools-technologies/1753468137257-mongodb.png",
    category: "backend",
  },
  {
    name: "C",
    exp: "6 years",
    image: "images/tools-technologies/1753468137258-c.png",
    category: "backend",
  },
  {
    name: "VS Code",
    exp: "6 years",
    image: "images/tools-technologies/1753468137259-vscode.png",
    category: "tools",
  },
  {
    name: "Code::Blocks",
    exp: "6 years",
    image: "images/tools-technologies/1753468137260-codeblocks.png",
    category: "tools",
  },
  {
    name: "Postman",
    exp: "2 years",
    image: "images/tools-technologies/1753468137261-postman.png",
    category: "tools",
  },
  {
    name: "Git",
    exp: "3 years",
    image: "images/tools-technologies/1753468137262-git.png",
    category: "tools",
  },
  {
    name: "GitHub",
    exp: "3 years",
    image: "images/tools-technologies/1753468137263-github.png",
    category: "tools",
  },
  {
    name: "Vercel",
    exp: "1 year",
    image: "images/tools-technologies/1753468137264-vercel.png",
    category: "tools",
  },
]

const categories = ["all", "frontend", "backend", "tools"];

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = tools.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section className="min-h-[50vh] px-4 py-4">
      <h2 className="text-4xl font-bold mb-6 text-center font-league">My skills</h2>
      {/* CATEGORY FILTER */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`capitalize transition-all duration-300
        ${activeCategory === category
                ? "text-[#FF6E82] underline decoration-2 underline-offset-4 decoration-[#FF6E82]"
                : "text-slate-600 hover:text-[#FF6E82]"
              }
      `}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {filteredSkills.map((item) => (
          <div key={item.name} className="flex items-center bg-gray-300 rounded-xl shadow p-3">
            <img src={item.image} alt={item.name} className="w-8 h-8 mr-3" />
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">{item.exp}</p>
            </div>
          </div>


        ))}
      </div>

    </section>
  )
}

export default TechStack