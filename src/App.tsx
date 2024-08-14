import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Link bileşenini import ettik
import "./App.css"; // CSS dosyasını import ettik

const App: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const newVisibleProjects: React.SetStateAction<number[]> = [];
      document.querySelectorAll(".project").forEach((project, index) => {
        const rect = project.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          newVisibleProjects.push(index + 1); // 1'den başladığı için
        }
      });
      setVisibleProjects(newVisibleProjects);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Warenix",
      description: "Barcode Stock Tracking App",
      image:
        "https://static.vecteezy.com/system/resources/previews/029/320/017/non_2x/web-development-mobile-app-app-ai-generated-free-png.png",
    },
    {
      id: 2,
      title: "Proje 2",
      description: "Bu ikinci projedir.",
      image:
        "https://static.vecteezy.com/system/resources/previews/029/320/017/non_2x/web-development-mobile-app-app-ai-generated-free-png.png",
    },
    {
      id: 3,
      title: "Proje 3",
      description: "Bu üçüncü projedir.",
      image:
        "https://static.vecteezy.com/system/resources/previews/029/320/017/non_2x/web-development-mobile-app-app-ai-generated-free-png.png",
    },
    {
      id: 4,
      title: "Proje 4",
      description: "Bu dördüncü projedir.",
      image:
        "https://static.vecteezy.com/system/resources/previews/029/320/017/non_2x/web-development-mobile-app-app-ai-generated-free-png.png",
    },
    {
      id: 5,
      title: "Proje 5",
      description: "Bu beşinci projedir.",
      image:
        "https://static.vecteezy.com/system/resources/previews/029/320/017/non_2x/web-development-mobile-app-app-ai-generated-free-png.png",
    },
    {
      id: 6,
      title: "Proje 6",
      description: "Bu altıncı projedir.",
      image:
        "https://static.vecteezy.com/system/resources/previews/029/320/017/non_2x/web-development-mobile-app-app-ai-generated-free-png.png",
    },
  ];

  return (
    <section className="home-container">
      {projects.map((project) => (
        <div
          key={project.id}
          className={`project ${
            visibleProjects.includes(project.id) ? "visible" : ""
          }`}
        >
          <div className="project-info">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Link to={`/details/${project.id}`} className="details-button">
              Details
            </Link>
          </div>
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default App;
