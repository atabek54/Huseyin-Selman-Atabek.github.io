import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../Home/Home.css';

const projects = [
  { id: 1, title: "Proje 1", description: "Bu birinci projedir.", image: "https://static.vecteezy.com/system/resources/previews/029/320/017/non_2x/web-development-mobile-app-app-ai-generated-free-png.png" },
  { id: 2, title: "Proje 2", description: "Bu ikinci projedir.", image: "https://static.vecteezy.com/system/resources/previews/029/320/017/non_2x/web-development-mobile-app-app-ai-generated-free-png.png" },
  { id: 3, title: "Proje 3", description: "Bu üçüncü projedir.", image: "https://static.vecteezy.com/system/resources/previews/029/320/017/non_2x/web-development-mobile-app-app-ai-generated-free-png.png" },
];

const Home: React.FC = () => {
  const animation = useSpring({
    from: { opacity: 0, transform: 'translateY(100px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 150, friction: 25 },
  });

  return (
    <section className="home-container">
      {projects.map(project => (
        <animated.div key={project.id} className="project" style={animation}>
          <div className="project-info">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
        </animated.div>
      ))}
    </section>
  );
}

export default Home;
