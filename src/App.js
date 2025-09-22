// src/App.js
import "./App.css";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App;

// src/Portfolio.js

const projects = [
  {
    title: "Hand-Drawn to SVG Optimizer",
    description:
      "Converts hand-drawn images to optimized SVG files using path optimization techniques.",
    demoLink: "#", // replace with live demo link if available
    githubLink: "https://github.com/mpeaco/svg-optimizer",
  },
  {
    title: "Project 2",
    description: "Brief description of your second project.",
    demoLink: "#",
    githubLink: "https://github.com/mpeaco/project2",
  },
  {
    title: "Project 3",
    description: "Brief description of your third project.",
    demoLink: "#",
    githubLink: "https://github.com/mpeaco/project3",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        My Project Portfolio
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="rounded-2xl shadow-md p-4">
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex gap-2">
                <Button asChild variant="default">
                  <a href={project.demoLink} target="_blank">
                    Live Demo
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={project.githubLink} target="_blank">
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
